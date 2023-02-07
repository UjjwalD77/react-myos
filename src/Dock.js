import React from 'react'
import Settings from './settings';

function Dock() {
  return (
    // <div className='flex h-screen bg-blue-600' >
        <div className='bg-black border-2 border-white flex border-b-0 rounded-md  text-slate-50 mt-auto ml-auto mr-auto'>
                    {/* ADD GLOBAL CONTEXT AND SHOW THE DRAGGABLE COMPONENTS IF THEY ARE ENABLED IN THE CONTEXT */}

            <div className='' onClick={Settings}>⚙️
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