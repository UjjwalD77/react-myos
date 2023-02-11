import React from 'react'
import Dock from './Dock'
import Settings from './settings';
import { UserContext } from './context';
import { useContext } from 'react';
import Spotify  from './SpotifyComp';
import AboutMe from './AboutMe';
import CMDComp from './CmdComp';
import ContactMe from './ContactMe';
import VsCode from './Vscode';
import Maps from './Maps';
import RacingGame from './RacingGame';


function Desktop() {
  const {curWallpaper} = useContext(UserContext);
  const {showRacingGame, setShowRacingGame, showMaps, showVscode,showSpotify,setShowSpotify,showAboutMe,setShowAboutMe,showSettings, showCMD, setShowCMD, showContactMe, setShowContactMe} = useContext(UserContext);

  console.log(showSettings);


  const handleOpenSpotify = () => {
    setShowSpotify(true)
  }
  const handleOpenAboutMe = () => {
    setShowAboutMe(true)
  }
  const handleOpenCMD = () => {
    setShowCMD(true)
  }
  const handleOpenContactMe = () => {
    setShowContactMe(true)
  }
  const handleOpenRacingGame = () => {
    setShowRacingGame(true)
  }
  return (
    <div class=" w-screen h-screen flex bg-blue-500 justify-between  "
     style={{ backgroundImage: `url(${curWallpaper})`, backfaceVisibility: 'visible', backgroundSize: "cover"}}>
        <div className='absolute flex flex-col flex-1'>
          <div className='h-19 w-22 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-slate-900 hover:bg-opacity-10   justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenSpotify()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png" alt="Spotify" ></img>Spotify</div>
          <div className='h-19 w-22 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-slate-900 hover:bg-opacity-10   justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenAboutMe()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/5082/5082720.png" alt="About Me"></img>About Me</div>
          <div className='h-19 w-22 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-slate-900 hover:bg-opacity-10   justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenCMD()}}><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/7207/7207841.png" alt="CMD"></img>Cmd</div>
          <div className='h-19 w-22 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-slate-900 hover:bg-opacity-10   justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenContactMe()}}><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/7979/7979615.png" alt="Contact Me"></img>Contact Me</div>
        </div>
        <div className='absolute flex flex-col items-end flex-1 right-1' >
          <div className='h-19 w-22 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-slate-900 hover:bg-opacity-10   justify-center text-center mb-3 mr-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenSpotify()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/5082/5082720.png" alt="Spotify" ></img>imp folder</div>
          <div className='h-19 w-20 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-slate-900 hover:bg-opacity-10   justify-center text-center mb-3 mr-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenRacingGame()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://static.gamezop.com/p7HOjYF4O/cover.jpg" alt="Racing Game"></img>Racing Game</div>  
        </div>
        {showRacingGame && <RacingGame/>}
        {showMaps && <Maps/>}
        {showVscode && <VsCode/>}
        {showContactMe && <ContactMe/>}
        {showCMD && <CMDComp/>}
        {showAboutMe  && <AboutMe/>}
        {showSpotify && <Spotify/>}
        <Dock />
        {showSettings && <Settings/>}
        
    </div>
  )
}

export default Desktop