import React from 'react'
import { UserContext } from './context';
import { useContext } from 'react';

const settingsIcon = require('./assets/icons/setting.png');
function Dock() {
  const{setShowMaps, setShowSettings, setShowContactMe, setShowVscode} = useContext(UserContext);
  const handleSettings = () => {
    setShowSettings(true);
  }
  const handleContactMe = () => {
    setShowContactMe(true);
  }
  const handleVsCode = () => {
    setShowVscode(true);
  }
  const handleMaps = () => {
    setShowMaps(true);
  }

  return (
    // <div className='flex h-screen bg-blue-600' >
        <div className='flex mt-auto mb-0 ml-auto mr-auto border-2 border-b-0 border-gray-200 rounded-bl-none rounded-br-none rounded-2xl bg-cyan-900 text-slate-50 '>

            <div className='flex flex-col-reverse p-2 pb-1' onClick={handleSettings}><img src="https://cdn-icons-png.flaticon.com/512/4015/4015801.png" title='Settings' className='w-8 h-8 hover:h-10 hover:w-10'  ></img>
            </div>
            <div className='flex flex-col-reverse p-2 pb-1' onClick={handleContactMe}><img src="https://cdn-icons-png.flaticon.com/512/7979/7979615.png" title='Contact Me' className='w-8 h-8 hover:h-10 hover:w-10' ></img>
            </div>
            <div className='flex flex-col-reverse p-2 pb-1' onClick={handleVsCode}><img src="https://cdn.iconscout.com/icon/free/png-512/vscode-4069952-3365471.png" title='VS Code' className='w-8 h-8 hover:h-10 hover:w-10' ></img>
            </div>
            <div className='flex flex-col-reverse p-2 pb-1' onClick={handleMaps}><img src="https://cdn-icons-png.flaticon.com/512/2335/2335353.png" title='Maps' className='w-8 h-8 hover:h-10 hover:w-10' ></img>
            </div>
            
            
            
        </div>
    // </div>
  )
}

export default Dock