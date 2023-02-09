import React, {useState} from 'react'
import Draggable, {DraggableCore} from 'react-draggable';
import AboutComp from './AboutComp';
import WallpapersComp from './WallpapersComp';

const tajmahal = require('./assests/wallpapers/tajmahal.jpg');
const skull = require('./assests/wallpapers/skull.jpg');
const birdy = require('./assests/wallpapers/birdy.jpg');
const nerd = require('./assests/wallpapers/nerd.jpg');
const maldives = require('./assests/wallpapers/maldives.jpg');
const zaza = require('./assests/wallpapers/zaza.jpg');

function Settings() {
    console.log('settings callled')
    const [curSetting, setCurSetting] = useState('wallpapers');
  return (
    <Draggable
    bounds="parent"
    handle=".titlebar"
    >
      <div className='absolute h-5/6 w-4/6 bg-black flex-col' >
        <div  className='titlebar' style={{backgroundColor: "grey", color: 'white', textAlign: 'center', height: '4vmin',fontWeight:'bold'}}>
          Settings
        </div>
          <div className='absolute h-full w-full bg-black flex'>
            <div className='bg-gradient-to-b from-black to-gray-900 w-1/5 flex-col'>
              <div className='text-xl text-white align-middle text-center p-4' onClick={()=>{setCurSetting('wallpapers')}}>
                Wallpapers
              </div>
              <div className='text-xl text-white align-middle text-center p-4'  onClick={()=>{setCurSetting('aboutos')}}>
                About OS
              </div>
            </div>
            {curSetting === 'wallpapers' ? <WallpapersComp/> : <AboutComp/>}

          </div>
      </div>
        
    </Draggable>
  )
}

export default Settings