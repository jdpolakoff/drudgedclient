import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import drudge from './images/drudge.png'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stories: [],
      showStories: false,
      questionableSources: [],
      conspiracySites: []
    }
  }


  componentDidMount(){
    var qb = ["10News.one,100 Percent Fed Up,247 News Media,70 News,AbcNews.com.co,Age of Shitlords,Alabama Observer,Allen West Republic,Alliance Defending Freedom,All News Pipeline,Alternative Media Syndicate,Amazingnews.net,American College of Pediatricians,American Fans,American Patriot Daily,American Family Association,American Flavor,American Freedom Fighters,American Journal Review,American Lookout,American News,American People Network,American Prides,American Principles Project,American Renaissance,American Society for the Defense of Tradition, Family and Property (TFP),American Today,American Truth Seekers,American Updater,Americans Against the Tea Party (AATTP),anews-24 (American News),Aurora-News,A Voice for Men,Banned Information,Bare Naked Islam,BB4SP,BeAware,Before It’s News,Big Blue Vision,Bipartisan Report,Black Genocide,Black Pigeon Speaks,Blue Informer,Blue Tribune,Bluevision.news,Blue Vision Post,Blunt Force Truth,Borderland Alternative Media (BAM),Breaking911,Breakingtop.world,Britain First,CbsNews.com.co,Censored.News,Center for Immigration Studies (CIS),Cerno (Cernovich.com),Christian Action Network,CityWorldNews,Clarion Project,Clash Daily,Cnn.com.de,cnn-globalnews.com,Concerned Women for America,Conservative Army,Conservative Byte,Conservative Daily Post,Conservative Fighters,Conservative Firing Line,Conservative Free Press,Conservative Info Corner,Conservative Media,Conservative Movement,Conservative Nation,Conservative News Flash,Conservapedia,Conservative 101,Conservative Patriot,Conservative Politicus,Conservative Post,Conservative Spirit,Conservative Tribune,Constitution Rising,Council of Conservative Citizens,Daily Buzz Live,Daily Headlines,Daily Infobox,Daily Insider News,Daily Notify,Daily Presser,Daily Stormer,Daily USA Update,Daily World Information,Dam-Reports,Danger and Play,David Horowitz Freedom Center,DEBKAfile,Defend Europa,Defiant America,Defund.com,Democratic Moms,Democratic Review,Denver Guardian,Departed (Maganews.com),Deplorable Movement 2020,DC Gazette,Discover the Networks,Donald Trump News,Donald Trump Potus 45,Downtrend,Draining the Swamp,Eagle Rising,Earth News-Conservative News,Embols,Empire Herald,Ending the Fed News,ENH Live,En Volve,Exposing Government,Family Research Council,Fars News,Federalist Nation,Federalist Tribune,Flash News Corner,Florida Sun-Post,Focus on the Family,France24-TV.com,Freakout Nation,Free Patriot Post,Free Rein Report,Freedom Daily,Freedom Liberty News,Freedom Outpost,Freedom’s Final Stand,Fresh News – USA,Frontpage Magazine,Fury News,FWD Now,Geller Report,Girls Just Wanna Have Guns,Global Info Today,Global Politics Now,Globe Magazine (Tabloid),Gone Left,GoodGopher,GOP Watchdog,GotNews,Hang the Bankers,Hawar News Agency,If You Only News,I have the Truth,I, Hypocrite,I Love My Freedom,IMOwired,iTag Live,InfoGalactic,Information Liberation,Informed Owners,Israel Video Network,Jew Watch,Jihad Watch,Joe for America,Jookos News,Just the Facts,Knights Templar International,Lady Liberty News,Learn Progress,Lew Rockwell,Liberal Plug,Liberal Society,Liberal Speak,Liberty Brief,Liberty Courier,Liberty is Viral,Liberty Writers News,London Web News,LoonWatch,Loser.com,Mad American Network,Mad World News,MagaPill,MartinLutherKing.org,MBGA – Make Britain Great Again,Media Zone,Metapedia,MILO News (Milo Yiannopoulos),Molon Labe Media,Moving Left,Mr. Conservative (MRC),My Right American,MyZoneToday,Nation45,National Alliance,National Economic Editorial,National Enquirer,National Policy Institute,National Vanguard,Native Americans,Native American News,NBC.com.co,NeverRepublican.com,Nevo News,New Century Times,News and Stories from USA,News Conservative,New Nation News,New Politics Today,News Blaze,NewsBreaksHere,NewsExaminer.net,News Chicken,News Feed Hunter,News Up Today,NewsWars,News With Views,NMWS.us,Nos Comunicamos,Oath Keepers,Occupy Democrats,Online Conservative Press,Open Magazines,Opposition Report,Our Eye on Islam,Overpasses for America,Pacific Pundit,Patriot Beacon,Patribotics Blog,Patriot Fires,Patriot Hangout,Patriot Update,Patriotic Viral News,Patriots Voice,Personal Liberty,Plymouth Patriot Post,PM Nightly News,Police Times,Political Ears,Political Inbox,Political Mayhem News,Political Site News,Politico Info,Politics Live,Politifact News,Powdered Wig Society,President 45 Donald Trump,Prideof-America.org (American News),Prntly,Pro-America News,Progress Tribune,Progressives Today,Project Purge,Proud Conservative,Proud Leader,Proud Patriots,Puppet String News,QPolitical,React 365,Read Conservatives,Reagan Coalition,Real Time Politics,Red Country,Red Ice TV,Red Info,Red People,Red Politics,Red Rock Daily News,Red Rock Tribune,Red State Journalist,Red State Pundit,Red, White and Right,Renew America,Resistance Report,Return of Kings,Right Alerts,Right Journalist,Right Smarts,Right Wing News,RINF,Shared News Report,SHTFplan.com,Smoloko,South Africa Today,SpeakGov.com,South Jersey Mechanic (Trump News),Speisa,Spinzon,Squawker,Stares at the World,State Fort Daily,State of the Nation 2012,Steadfast and Loyal,Stone Cold Truth,Subject Politics,Sunday Inquirer,Supreme Patriot,Sure News,Syria News,Taki’s Magazine,TashNews,Tea Party Inc.,TD Newswire,TdtAlliance.com,Teddy Stick,Tell Me Now,TheBreakingNews,The American Mirror,The Angry Patriot,The Boston Tribune,The Constitution,The D.C. Clothesline,The Daily Bell,The Deplorables,The Duran,The Federalist Papers Project,The Federation for American Immigration Reform,The Free Patriot,The Free Telegraph,The Gateway Pundit,The Goldwater,The Horn News,The Liberty Eagle,The National Patriot,The National Pulse,The New Observer,The News Guru,The New York Evening,The Peoples Truth,The Political Tribune,The Premium News,The Proud Liberal,The Religion of Peace,The Remnant Magazine,The Rightists,The Right Stuff,The Sons of Liberty (Bradlee Dean),The Trump Media,The Truth Division,The Unz Review,The US Patriot,The USA Conservative,The Washington Feed,The Washington Standard,Times of America,Today Dispatch,Top Right News,Truth and Action,True Activist,True Blue Scoop,True Trumpers,Trumpservative News,Truth Examiner,TruthFeed,Truth In Media,Truth Monitor,Truth Revolt,Truth Uncensored,Uncle Sam’s Misguided Children,Underground Journalist,Understanding the Threat,Unique Web Magazine,Universe Politics,US Advisor,U.S. Chronicle,U.S. Herald,US Info News,US Journal Review,US Postman,USA Conservative Report,USA Daily Post,USA Daily Review,USA Daily Time,USA Dose News,USAFirstInfo,USA in Front,USA Newsflash,USA News for You,USA News/Politics USA News,USA News/States-TV,USANewsToday,USA Politics Now,USA Public Life,USA Supreme,USA Television,USA Viral News Today,USA World Box,Vanguard America,Vatican Radio,VDARE,Vidmax,Viral Liberty,Viral Patriot,Walk With Her,Web Daily,We Conservative,Western Sentinel,WikiIslam,Winning Democrats,Witherspoon Institute,World News Politics,WorldPolitics News,World Politicus,Yes, I’m Right,ZootFeed.com"]

    var qb = qb.join(' ').split(',')

    qb = qb.map((source)=>{
      return source.split(' ').join('').toLowerCase()
    })

    this.setState ({ questionableSources: qb}, ()=> {
      console.log(this.state.questionableSources)
    })

    var conspiracy = ["21st Century Wire,369News,A Sheep No More,Abel Danger,Above Top Secret,ACN Latitudes,Activist Post,Alt-Market,AwdNews,Age of Autism,Alliance for Advanced Health,Alt Health Works,Alternative Media Television (AMTV),Alternative News Network,American Free Press,American Intelligence Media (Aim4Truth),American Intelligencer Report,Ancient Code,Ancient Origins,Anderson Institute,Anti News Network,Anonymous,Another Day in the Empire,Answers in Genesis,Asia-Pacific Research,Assassination Science,Australian National Review,Autism Speaks,Awareness Act,Behold Israel,Biologos Foundation,Blacklisted News,Catholic Online,Center for Security Policy,Charisma News,Christian Broadcasting Network (CBN),Christian Science,Christian Times Newspaper,ChristianToday.Info,Climate Etc,Climate Depot,Coast to Coast AM,Collectively Conscious,Collective-Evolution,Conscious Life News,Conspiracy Daily Update,Conspiracy Planet,Cosmic Intelligence Agency,Countdown to Zerotime,Counter Current News,Counter Propa,CounterPsyOps,Covert Geopolitics,CreationWiki,CS Globe,Curious Mind Magazine,Daily Occupation,Daily Star UK,David Icke,David Wolfe,Data Asylum,Disclose TV,Discovery Institute,Dr. Axe,Earthpulse Press,Earth We Are One (EWAO),Eco News,EcoWatch,Educate Inspire Change,Educate-Yourself,Eluxe Magazine,End Time Headlines,Enlightened Planet,Environmental Working Group (EWG),Escape all these Things,Every News Here,Evolution News and Views,Extraordinary News,FaithPanda,Family Survival Headlines,Fellowship of the Minds,Food Babe,Food Matters,Freedomain Radio,Freethought Project,Friends of Science,From the Trenches World Report,GeoEngineering Watch,Global Research,Global Skywatch,Godlike Productions,Got Questions,Government Slaves,Greenpeace,Gulag Bound,HAARP.net,Health Eternally,Health Impact News,Health Nut News,Health Sciences Institute,Healthy Vibes,Hello Christian,Henry Makow (savethemales.ca),Higgins News Network,HL12,Homeopathy Journal,Humans Are Free,iHealthtube,Illuminati News,Illuminati Watcher,I Love Native Americans,Independent Living News,Infinite Unknown,Infowars,Institute for Creation Research (IRC),Institute for Responsible Technology,Intellihub,Investement Watch Blog,Israel, Islam and End Times,JeffereyJaxen.com,Jesus is Savior,Jews News,Jones Report,Knowledge of Today,LaRouche PAC,Liberty Videos,LifeSpa,Live Action,Living Resistance,Living Whole,Lozier Institute,Media Fact Watch,Media Roots,Medicine News,Medusa Magazine,Mercola,Modern Alternative Mama,Morning Ledger,Murica Today,Natural Awakenings Magazine,Natural Cures,Natural Cures Not Medicine,Natural Health 365,Natural Medicine Team,Natural News,Natural Society,Naturally Savvy,Neon Nettle,New American News,Newsbud,NewsInsideOut.com,News Target,NoDisInfo,Now the End Begins,NutritionFacts.org,Our Health Guides,Pak Alert Press,People for the Ethical Treatment of Animals (PETA),Political Blind Spot,Popular Technology,Principia Scientific International,Prison Planet,Prophecy News Watch,Prophecy Today,Prop or Not,Rapture News Network,RealFarmacy,Real Jew News,Real News 24,Redoubt News,Reflection of Mind,Religion Mind,Rense,Revolution Radio,SaneVax,SCEPCOP (Debunking Skeptics),Science Factz,Science Vibe,Sign of the Times,Secrets of the Fed,Sheep Killers,Shoebat,Skeptiko,South Front,Space.News,Stillness in the Storm,Storm Clouds Gathering,StormFront,Sustainable Pulse,The Anti-Media,The Aware,The Common Sense Show,The Controversial Files,The Corbett Report,The Crusader Journal,The Daily Check,The Daily Conspiracy,The Daily Sheeple,The Earth Child,The European Union Times,The Event Chronicle,The Forbidden Knowledge,The Hearty Soul,The International Reporter,The Internet Post,The Last Great Stand,The Liberty Beacon,The Mind Unleashed,The Rundown Live,The Stream,The Trumpet,The Truth About Cancer,The Truth Seeker,The Waking Times,Thinking Mom’s Revolution,Thrive Movement,Topinfo Post,True Pundit,TruNews,Truth Broadcasting Network,Truth Channel Politics,Truth Theory,Twisted.News,Tyranny Rising,UK Column,Underground Health,USA Hitman,USAWatchdog.com,Vaccines.news,Vaccines Revealed,Veterans Today,Vigilant Citizen,Viral News Network,Voice of America TV (voiceofamericatv.com),Wake Up World,Watts Up with That,We Are Anonymous,We Are Change,Wellness Achiever,Whale.to,WhatDoesItMean,What Really Happened,Why Don’t You Try This,Wikispooks,World Truth TV,Your News Wire,Zero Hedge"]

    var conspiracy = conspiracy.join(' ').split(',')

    conspiracy = conspiracy.map((source)=>{
      return source.split(' ').join('').toLowerCase()
    })
    this.setState({ conspiracySites: conspiracy })

    axios.get('https://drudged.herokuapp.com/api')
      .then((response)=> {
        var stories = response.data.filter((story, index)=>{
          if (story.linkText === 'CNN:  RELIABLE SOURCES' || story.linkText === '[UK] DAILY MAIL FEED' || story.linkText === 'GET IT ON THE GO: DRUDGE MOBILE...' || story.linkText === 'BE SEEN!   RUN ADS ON DRUDGE REPORT...'
          || story.linkText === 'PRIVACY POLICY...' || story.linkText === 'EMAIL: DRUDGE@DRUDGEREPORT.COM' || story.linkText === 'DRUDGE REFERENCE DESK'
          || story.linkText === 'RECENT DRUDGE HEADLINES...' || story.linkText === 'HELLO!' || story.linkText === 'E!'){
            return
          }
          if (index < 10){
            return story.linkHref !== 'http://www.drudgereport.com/'
          }
          if (index > 10 && story.linkText.includes('...') === true || story.linkText.includes('!')) {
            return story
          }
          if (index > 10 && story.linkText.includes('...') !== true) {
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
          } else {
            return
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
            stories: [],
            compareURL: outlet.split('.')[0]
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
          console.log(this.state.stories)
          var storyDiv = this.state.stories.map((story)=>{
              if (story.stories.length > 1 && this.state.conspiracySites.indexOf(story.compareURL) === -1 && this.state.questionableSources.indexOf(story.compareURL) === -1) {
                return (
                  <div>
                  <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} stories on Drudge</p>
                  </div>
                )
              } else if (story.stories.length === 1 && this.state.conspiracySites.indexOf(story.compareURL) === -1 && this.state.questionableSources.indexOf(story.compareURL) === -1){
                return (
                  <div>
                  <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} story on Drudge</p>
                  </div>
                )
              } else if (story.stories.length === 1 && this.state.conspiracySites.indexOf(story.compareURL) !== -1 || this.state.questionableSources.indexOf(story.compareURL) !== -1) {
                return (
                  <div>
                  <p onClick={this.showStories} className="crossedOut">{story.outlet}: {story.stories.length} story on Drudge *</p>
                  </div>
                )
              } else if (story.stories.length > 1 && this.state.conspiracySites.indexOf(story.compareURL) !== -1 || this.state.questionableSources.indexOf(story.compareURL) !== -1){
                return (
                  <div>
                  <p onClick={this.showStories} className="crossedOut">{story.outlet}: {story.stories.length} stories on Drudge *</p>
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

    this.setState({ showStories: !this.state.showStories }, ()=> {
      var storyDiv = this.state.stories.map((story)=>{

        if (clicked.split(':')[0] === story.outlet){
          if (this.state.conspiracySites.indexOf(story.compareURL) !== -1 || this.state.questionableSources.indexOf(story.compareURL) !== -1) {
            console.log('hello')
            var storiez = story.stories.map((story)=>{
              return (
                <div className="linkContain">
                <a className="crossedOut" target="_blank" href={story.linkHref}><p>{story.linkText}</p></a>
                </div>
              )
            })
            if (story.stories.length === 1){
              return (
                <div>
                <p onClick={this.showStories} className="crossedOut">{story.outlet}: {story.stories.length} story on Drudge * ▲</p>
                {storiez}
                </div>
              )
            } else {
              return (
                <div>
                <p onClick={this.showStories} className="crossedOut">{story.outlet}: {story.stories.length} stories on Drudge * ▲</p>
                {storiez}
                </div>
              )
            }
          }
        } else {
          if (clicked.split(':')[0] !== story.outlet && story.stories.length === 1 && this.state.conspiracySites.indexOf(story.compareURL) === -1 && this.state.questionableSources.indexOf(story.compareURL) === -1) {
            return (
              <div>
              <p className="drudged">{story.outlet}: {story.stories.length} story on Drudge</p>
              </div>
            )
          } else if (clicked.split(':')[0] !== story.outlet && story.stories.length > 1 && this.state.conspiracySites.indexOf(story.compareURL) === -1 && this.state.questionableSources.indexOf(story.compareURL) === -1) {
            return (
              <div>
              <p className="drudged">{story.outlet}: {story.stories.length} stories on Drudge</p>
              </div>
            )
          }
        }

        if (this.state.conspiracySites.indexOf(story.compareURL) === -1 && this.state.questionableSources.indexOf(story.compareURL) === -1 && clicked.split(':')[0] === story.outlet) {
          var storiez = story.stories.map((story)=>{
            return (
              <div className="linkContain">
                <a className="drudgeLink" target="_blank" href={story.linkHref}><p>{story.linkText}</p></a>
              </div>
            )
          })
          if (story.stories.length === 1){
            return (
              <div>
              <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} story on Drudge ▲</p>
              {storiez}
              </div>
            )
          } else {
            return (
              <div>
              <p onClick={this.showStories} className="drudged">{story.outlet}: {story.stories.length} stories on Drudge ▲</p>
              {storiez}
              </div>
            )
          }
        }
       if (story.outlet !== clicked.split(':')[0] && story.stories.length === 1 && this.state.conspiracySites.indexOf(story.compareURL) !== -1 || this.state.questionableSources.indexOf(story.compareURL) !== -1){
          return (
            <div>
              <p className="crossedOut">{story.outlet}: {story.stories.length} story on Drudge *</p>
            </div>
          )
        } else if (story.outlet !== clicked.split(':')[0] && story.stories.length > 1 && this.state.conspiracySites.indexOf(story.compareURL) !== -1 || this.state.questionableSources.indexOf(story.compareURL) !== -1){
          return (
            <div>
              <p className="crossedOut">{story.outlet}: {story.stories.length} stories on Drudge *</p>
            </div>
          )
        } else {
          return (
            <div>
              <p className="drudged">{story.outlet}: {story.stories.length} stories on Drudge</p>
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
        <p className="disclaimer">* Stories in red font are from sources deemed "questionable" or "conspiracy-psuedoscience" by <a className="disclaimer" href="https://mediabiasfactcheck.com/">Media Bias/Fact Check</a></p>
        <div className="imgContain">
        <h1 className="drudgedReport">THE DRUDGED REPORT</h1>
        </div>
          {this.state.showStories ? <div className="contain">{this.state.expandedStoryDiv}</div> : <div className="contain">{this.state.storyDiv}</div>}
      </div>
    );
  }
}

export default App;
