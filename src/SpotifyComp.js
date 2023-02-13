import React, {useContext, useState} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';


export default function Spotify() {
    const {setShowSpotify,zindexindex,updatezindexindex } = useContext(UserContext);
    const [isMaximize, setIsMaximize] = useState(false);
    const handleClose = () => {
        setShowSpotify(false);
    }
    const handleChangeSize = () => {
        setIsMaximize(prev=>!prev);
    }
    return (
        <Draggable
        bounds="parent"
        handle=".titlebar"
        onMouseDown={()=>{updatezindexindex('Spotify')}}
       >
            <div className={isMaximize?'flex flex-col h-screen w-screen absolute':'h-5/6 w-4/6 absolute'} style={{zIndex:  (zindexindex.Spotify.toString()) }}>
                <div className='titlebar'  style={{backgroundColor: 'lightgreen', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row',}}>
                   
                 <h1 className='text-center flex-auto'>Spotify</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleChangeSize()}}>🔳</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                </div>
                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg" title="Spotify" loading='lazy' encrypted-media  picture-in-picture  className="h-full w-full bg-ub-cool-grey "></iframe>
            </div>
        </Draggable>
    )
}

// export const displaySpotify = () => {
//     <Spotify> </Spotify>
// }
