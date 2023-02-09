import React from 'react'
import Dock from './Dock'
import Settings from './settings';
import { UserContext } from './context';
import { useContext } from 'react';
import Spotify  from './SpotifyComp';


function Desktop() {
  const {curWallpaper} = useContext(UserContext);
  const {showSettings} = useContext(UserContext);
  const {showSpotify,setShowSpotify} = useContext(UserContext);
  console.log(showSettings);
  const handleOpenSpotify = () => {
    setShowSpotify(true)
  }
  return (
    <div class=" w-screen h-screen flex  bg-blue-500"
     style={{ backgroundImage: `url(${curWallpaper})`, backfaceVisibility: 'visible', backgroundSize: "cover"}}>
        <div className='flex-col '>
          <div className='h-20 w-20 bg-green-600 justify-center text-center mb-3 ' onDoubleClick={()=>{handleOpenSpotify()}} >🎵Spotify</div>
          <div className='h-20 w-20 bg-green-600 justify-center text-center mb-3 ' >🤓About Me</div>
          <div className='h-20 w-20 bg-green-600 justify-center text-center mb-3 ' >CMD</div>
        </div>
        {showSpotify && <Spotify/>}
        <Dock />
        {showSettings && <Settings/>}
        
    </div>
  )
}

export default Desktop