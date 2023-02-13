import React from 'react'
import Draggable from 'react-draggable';
import { UserContext } from './context';
import { useContext } from 'react';
import { useState } from 'react';

function CmdComp() {
    const {setShowCMD,zindexindex, updatezindexindex} = useContext(UserContext);
    const [isMaximize,setIsMaximize] = useState(false);
    const handleClose = () => {
        setShowCMD(false);
    }
    const handleMaximize = () => {
        setIsMaximize(prev=>!prev);
    }
  return (
    <Draggable
    bounds="parent"
    onMouseDown={()=>{updatezindexindex('CMD');console.log(zindexindex)}}
    >
        <div  className={isMaximize?'absolute w-screen bg-black h-screen bg-opacity-80':'absolute w-2/6 bg-black h-4/6 bg-opacity-80'}
             style={{zIndex:  (zindexindex.CMD.toString()) }}>
            <div className='flex flex-row text-center text-white bg-gray-800 align-middle '>
                <h1 className='m-auto'>Command Prompt</h1>
                <h1 className='cursor-pointer hover:' onClick={()=>handleMaximize()}>🔳</h1>
                <h1 className='cursor-pointer hover:' onClick={()=>handleClose()}>❌</h1>
            </div>
            
        </div>
    </Draggable>
  )
}

export default CmdComp