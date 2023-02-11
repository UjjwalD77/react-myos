import React, {useContext} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';

export default function RacingGame() {
    const {setShowRacingGame,zindexindex,updatezindexindex } = useContext(UserContext);
    const handleClose = () => {
        setShowRacingGame(false);
    }
    return (
        <Draggable
        bounds="parent"
        handle=".titlebar"
        onMouseDown={()=>{updatezindexindex('RacingGame')}}
       >
            <div className='absolute w-4/6 h-5/6' style={{zIndex:  (zindexindex.RacingGame.toString()) }}>
                <div className='titlebar'  style={{backgroundColor: 'blue', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row',}}>
                   
                 <h1 className='flex-auto text-center'>Racing Game</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                </div>
                <iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0"  className="w-full h-full bg-purple-700 "  src="https://zv1y2i8p.play.gamezop.com/g/p7HOjYF4O"> </iframe>
                </div>
        </Draggable>
    )
}

