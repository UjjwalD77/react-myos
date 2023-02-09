import React from 'react'
import { UserContext } from './context';
import { useContext } from 'react';

const settingsIcon = require('./assests/icons/setting.png');
function Dock() {
  const{setShowSettings} = useContext(UserContext);
  const handleSettings = () => {
    setShowSettings(true);
  }

  return (
    // <div className='flex h-screen bg-blue-600' >
        <div className='bg-black border-2 border-white flex border-b-0 rounded-md  text-slate-50 mt-auto ml-auto mr-auto'>

            <div className='' onClick={handleSettings}><img src="https://cdn-icons-png.flaticon.com/512/4015/4015801.png" className='h-10' ></img>
            </div>

            <div className=''>⚙️
            </div>
            <div className=''>⚙️
            </div>
            <div className=''>⚙️
            </div>
        </div>
    // </div>
  )
}

export default Dock