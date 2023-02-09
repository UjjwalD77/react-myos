import React, {useContext, useState} from 'react'
import Draggable  from 'react-draggable';
import AboutComp from './AboutComp';
import WallpapersComp from './WallpapersComp';
import { UserContext } from './context';

function Settings() {
    console.log('settings callled')
    const [curSetting, setCurSetting] = useState('wallpapers');
    const {setShowSettings,zindexindex,updatezindexindex} = useContext(UserContext);
    const handleClose = () => {
      setShowSettings(false);
    }

  return (
    <Draggable
    bounds="parent"
    handle=".titlebar"
    onMouseDown={()=>{updatezindexindex('Settings');console.log(zindexindex)}}>

      <div className='absolute h-5/6 w-4/6 bg-black flex-col' style={{zIndex:  (zindexindex.Settings.toString()) }}>
        <div className='titlebar' style={{backgroundColor: 'grey', color:'white', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row'}}>
                   
                   <h1 className='text-center flex-auto'>Settings</h1>
                   <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                  
        </div>
          <div className='absolute h-full w-full bg-black flex'>
            <div className='bg-gradient-to-b from-black to-gray-900 w-1/5 flex-col'>
              <div className='text-xl text-white align-middle text-center p-4 hover:cursor-pointer' onClick={()=>{setCurSetting('wallpapers')}}>
                {curSetting === 'wallpapers' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text  to to-white' >Wallpapers</h1> : <h1>Wallpapers</h1>}
              </div>
              <div className='text-xl text-white align-middle text-center p-4 hover:cursor-pointer'  onClick={()=>{setCurSetting('aboutos')}}>
              {curSetting === 'aboutos' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text  to to-white' >About OS</h1> : <h1>About OS</h1>}
              </div>
            </div>
            {curSetting === 'wallpapers' ? <WallpapersComp/> : <AboutComp/>}

          </div>
      </div>
        
    </Draggable>
  )
}

export default Settings