import React from 'react'
import Draggable from 'react-draggable';
import { UserContext } from './context';
import { useContext } from 'react';

function CmdComp() {
    const {setShowCMD} = useContext(UserContext);

    const handleClose = () => {
        setShowCMD(false);
    }
  return (
    <Draggable
    bounds="parent"
    >
        <div className='h-4/6 w-2/6 bg-black bg-opacity-80 absolute' >
            <div className='bg-gray-800 text-white text-center flex flex-row '>
                <h1 className='m-auto'>Command Prompt</h1>
                <h1 className='hover: cursor-pointer' onClick={()=>handleClose()}>❌</h1>
            </div>
            
        </div>
    </Draggable>
  )
}

export default CmdComp