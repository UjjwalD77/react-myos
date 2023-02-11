import React, {useContext} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';

export default function VsCode() {
    const {setShowVscode,zindexindex,updatezindexindex } = useContext(UserContext);
    const handleClose = () => {
        setShowVscode(false);
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
                {/* <iframe src="https://www.google.com/maps/embed"  className="w-full h-full bg-ub-cool-grey "  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>             */}
                {/* <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=36.65039062500001%2C-3.601142320158722%2C110.03906250000001%2C32.47269502206151&amp;layer=mapnik" className="w-full h-full bg-ub-cool-grey " ></iframe> */}
                </div>
        </Draggable>
    )
}

