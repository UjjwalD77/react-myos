import React from 'react'
import { UserContext } from './context';
import { useContext } from 'react';


function Dock() {
  const{setShowSettings} = useContext(UserContext);
  const handleSettings = () => {
    setShowSettings(prev=>!prev)
  }

  return (
    // <div className='flex h-screen bg-blue-600' >
        <div className='bg-black border-2 border-white flex border-b-0 rounded-md  text-slate-50 mt-auto ml-auto mr-auto'>

            <div className='' onClick={handleSettings}>⚙️
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