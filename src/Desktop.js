import React from 'react'
import Dock from './Dock'
import Settings from './settings';
import { UserContext } from './context';
import { useContext } from 'react';
import Spotify  from './SpotifyComp';
import AboutMe from './AboutMe';


function Desktop() {
  const {curWallpaper} = useContext(UserContext);
  const {showSpotify,setShowSpotify,showAboutMe,setShowAboutMe,showSettings, showCMD, setShowCMD} = useContext(UserContext);

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
  return (
    <div class=" w-screen h-screen flex  bg-blue-500"
     style={{ backgroundImage: `url(${curWallpaper})`, backfaceVisibility: 'visible', backgroundSize: "cover"}}>
        <div className='flex-col '>
          <div className='h-20 w-20 zindex  justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenSpotify()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png"></img>Spotify</div>
          <div className='h-20 w-20   align-middle justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenAboutMe()}} ><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/5082/5082720.png"></img>About Me</div>
          <div className='h-20 w-20   justify-center text-center mb-3 ml-3 hover:cursor-pointer flex flex-col mt-3' onDoubleClick={()=>{handleOpenCMD()}}><img  style={{alignSelf: 'center', height: '8vmin'}}  src="https://cdn-icons-png.flaticon.com/512/7207/7207841.png"></img>Cmd</div>
        </div>
        {showAboutMe  && <AboutMe/>}
        {showSpotify && <Spotify/>}
        <Dock />
        {showSettings && <Settings/>}
        
    </div>
  )
}

export default Desktop