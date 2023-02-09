import React from 'react'
import Dock from './Dock'
import Settings from './settings';
import { UserContext } from './context';
import { useContext } from 'react';
import Spotify  from './SpotifyComp';
import AboutMe from './AboutMe';
import CMDComp from './CmdComp';
import ContactMe from './ContactMe';


function Desktop() {
  const {curWallpaper} = useContext(UserContext);
  const {showSpotify,setShowSpotify,showAboutMe,setShowAboutMe,showSettings, showCMD, setShowCMD, showContactMe, setShowContactMe} = useContext(UserContext);

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
  return (
    <div class=" w-screen h-screen flex  bg-blue-500"
     style={{ backgroundImage: `url(${curWallpaper})`, backfaceVisibility: 'visible', backgroundSize: "cover"}}>
        <div className='flex flex-col '>
          <div className='h-20 w-20 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenSpotify()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png" alt="Spotify" ></img>Spotify</div>
          <div className='h-20 w-20 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  align-middle justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenAboutMe()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/5082/5082720.png" alt="About Me"></img>About Me</div>
          <div className='h-20 w-20 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenCMD()}}><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/7207/7207841.png" alt="CMD"></img>Cmd</div>
          <div className='h-20 w-20 text-white font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenContactMe()}}><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/7979/7979615.png" alt="Contact Me"></img>Contact Me</div>
        </div>
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