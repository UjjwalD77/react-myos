import React, {useContext, useState} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';

export default function RacingGame() {
    const {setShowRacingGame,zindexindex,updatezindexindex } = useContext(UserContext);
    const [isMaximize, setIsMaximize] = useState(false);
    const handleClose = () => {
        setShowRacingGame(false);
    }
    const handleChangeSize = () => {
        setIsMaximize(prev=>!prev);
    }
    return (
        <Draggable
        bounds="parent"
        handle=".titlebar"
        onMouseDown={()=>{updatezindexindex('RacingGame')}}
       >
            <div className={isMaximize?'absolute flex flex-col h-full w-full':'absolute w-4/6 h-5/6'} style={{zIndex:  (zindexindex.RacingGame.toString()) }}>
                <div className='titlebar'  style={{backgroundColor: 'blue', minHeight: '25px', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row',}}>
                   
                 <h1 className='flex-auto text-center text-white'>Racing Game</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleChangeSize()}}>🔳</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                </div>
                {/* THIS GAME IS NOT MADE BY ME. 3rd party game embedded. */}
                <iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0"  className="w-full h-full bg-purple-700 "  src="https://zv1y2i8p.play.gamezop.com/g/p7HOjYF4O"> </iframe>
                </div>
        </Draggable>
    )
}

