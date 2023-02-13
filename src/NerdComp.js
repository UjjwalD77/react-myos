import React, {useContext} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';
const nerdvid = require('./assets/media/nerd.mp4');

export default function NerdComp() {
    const {setShowNerd,zindexindex,updatezindexindex } = useContext(UserContext);
    const handleClose = () => {
        setShowNerd(false);
    }
    return (
        <Draggable
        bounds="parent"
        handle=".titlebar"
        onMouseDown={()=>{updatezindexindex('Nerd')}}
       >
            <div className='absolute w-2/6' style={{zIndex:  (zindexindex.Nerd.toString()) }}>
                <div className='titlebar'  style={{backgroundColor: 'white', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row', alignItems:'center'}}>
                   
                 <h1 className='flex-auto text-center'>YOU</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                </div>
                <video controls width="100%" autoPlay='true' volume={0.5} >
                    <source src={nerdvid} type="video/mp4"
                    />
                    Sorry, your browser doesn't support videos.
                </video>
                </div>
        </Draggable>
    )
}

