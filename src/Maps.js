import React, {useContext, useState} from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';

export default function Maps() {
    const {setShowMaps,zindexindex,updatezindexindex } = useContext(UserContext);
    const [isMaximize, setIsMaximize] = useState(false);
    const handleClose = () => {
        setShowMaps(false);
    }
    const handleChangeSize = () => {
        setIsMaximize(prev=>!prev);
    }
    return (
        <Draggable
        bounds="parent"
        handle=".titlebar"
        onMouseDown={()=>{updatezindexindex('Maps')}}
       >
            <div className={isMaximize?'absolute flex flex-col w-screen h-screen':'absolute w-4/6 h-5/6'} style={{zIndex:  (zindexindex.Maps.toString()) }}>
                <div className='titlebar'  style={{backgroundColor: 'blue', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row', alignItems:'center'}}>
                   
                 <h1 className='flex-auto text-center text-white'>Google Maps</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleChangeSize()}}>🔳</h1>
                 <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                </div>
                {/* <iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0"  src="https://zv1y2i8p.play.gamezop.com/g/p7HOjYF4O"> </iframe> */}
                <iframe src="https://www.google.com/maps/embed"  className="w-full h-full bg-gray-500 "  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
                {/* <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=36.65039062500001%2C-3.601142320158722%2C110.03906250000001%2C32.47269502206151&amp;layer=mapnik" className="w-full h-full bg-ub-cool-grey " ></iframe> */}
                </div>
        </Draggable>
    )
}

