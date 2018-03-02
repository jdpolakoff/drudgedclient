import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import drudge from './images/drudge.png'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stories: [],
      showStories: false
    }
  }


  componentDidMount(){
    axios.get('https://drudged.herokuapp.com/api')
      .then((response)=> {
        var stories = response.data.filter((story, index)=>{
          if (index < 10){
            return story.linkHref !== 'http://www.drudgereport.com/'
          }
          if (index > 20){
            return story.linkText !== story.linkText.toUpperCase()
          }
        })
        var storyArray = []
        stories.forEach((story)=>{
          if (story.linkHref.includes('http://www.')){
            var cleanURL = story.linkHref.replace('http://www.', '').split('/')[0]
          } else if (story.linkHref.includes('https://www.')){
            var cleanURL = story.linkHref.replace('https://www.', '').split('/')[0]
          } else if (story.linkHref.includes('http://')){
            var cleanURL = story.linkHref.replace('http://', '').split('/')[0]
          } else if (story.linkHref.includes('https://')){
            var cleanURL = story.linkHref.replace('https://', '').split('/')[0]
          }
          story['cleanURL'] = cleanURL
          story['count'] = 1
          storyArray.push(story.cleanURL)
        })
        storyArray = storyArray.filter((outlet, index, storyArray)=>{
          return storyArray.indexOf(outlet) == index
        })
        storyArray = storyArray.map((outlet)=>{
          return outlet = {
            outlet: outlet,
            stories: []
          }

        })
        storyArray.forEach((outlet)=>{
          stories.forEach((story)=>{
            if (story.cleanURL === outlet.outlet) {
              outlet.stories.push(story)
            }
          })
        })
        function compare(a, b){
          if (a.stories.length > b.stories.length){
            return -1
          }
          if (a.stories.length < b.stories.length){
            return 1
          }
          return 0
        }
        storyArray.sort(compare)
        this.setState({ stories: storyArray }, ()=> {

          var storyDiv = this.state.stories.map((story)=>{
            if (story.stories.length > 1) {
              return (
                <div>
                  <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} stories on Drudge</p>
                </div>
              )
            } else {
              return (
                <div>
                  <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} story on Drudge</p>
                </div>
              )
            }
          })
          this.setState({ storyDiv: storyDiv })
        })
      })
    }

  showStories = (e) => {
    const clicked = e.currentTarget.textContent
    console.log('hi')

    this.setState({ showStories: !this.state.showStories }, ()=> {
      var storyDiv = this.state.stories.map((story)=>{
        if (clicked.split(':')[0] === story.outlet) {
          var storiez = story.stories.map((story)=>{
            return (
              <div className="linkContain">
                <a className="drudgeLink" target="_blank" href={story.linkHref}><p>{story.linkText}</p></a>
              </div>
            )
          })
          return (
            <div>
            <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} stories on Drudge</p>
            {storiez}
            </div>
          )
        } else if (clicked.split(':')[0] !== story.outlet && story.stories.length > 1) {
          return (
            <div>
            <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} stories on Drudge</p>
            </div>
          )
        } else if (clicked.split(':')[0] !== story.outlet && story.stories.length === 1) {
            return (
              <div>
              <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} story on Drudge</p>
              </div>
            )
        }
      })
      this.setState({ expandedStoryDiv: storyDiv })
    })
  }

  render() {

    return (
      <div className="App">
        <div className="imgContain">
        <img className="img" src={drudge} />
        </div>
        <h1 className="headline">{"WHO'S ON DRUDGE?"}</h1>
        <div className="imgContain">
        <h1 className="drudgedReport">THE DRUDGED REPORT</h1>
        </div>
          {this.state.showStories ? <div className="contain">{this.state.expandedStoryDiv}</div> : <div className="contain">{this.state.storyDiv}</div>}
      </div>
    );
  }
}

export default App;
