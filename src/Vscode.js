import React, {useContext} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';

export default function VsCode() {
    const {setShowVsCode,zindexindex,updatezindexindex } = useContext(UserContext);
    const handleClose = () => {
        setShowVsCode(false);
    }
    return (
        <Draggable
        bounds="parent"
        handle=".titlebar"
        onMouseDown={()=>{updatezindexindex('VsCode')}}
       >
            <div className='absolute w-4/6 h-5/6' style={{zIndex:  (zindexindex.VsCode.toString()) }}>
                <div className='titlebar'  style={{backgroundColor: 'blue', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row',}}>
                   
                 <h1 className='flex-auto text-center'>Unofficial Code Editor</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                </div>
                {/* <iframe src="https://vscode.dev" title="VsCode"  encrypted-media  picture-in-picture  className="w-full h-full bg-ub-cool-grey "></iframe> */}
                <iframe src="https://github1s.com/UjjwalD77/FullForce-Aio-Tool/blob/main/FullForce.py" title="Unofficial Github Editor"  encrypted-media  picture-in-picture  className="w-full h-full bg-ub-cool-grey "></iframe>
            </div>
        </Draggable>
    )
}

