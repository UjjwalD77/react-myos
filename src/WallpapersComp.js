import React, { useContext } from 'react'
import Draggable, {DraggableCore} from 'react-draggable';
import { UserContext } from './context';

const tajmahal = require('./assests/wallpapers/tajmahal.jpg');
const skull = require('./assests/wallpapers/skull.jpg');
const birdy = require('./assests/wallpapers/birdy.jpg');
const nerd = require('./assests/wallpapers/nerd.jpg');
const maldives = require('./assests/wallpapers/maldives.jpg');
const zaza = require('./assests/wallpapers/zaza.jpg');



function WallpapersComp() {
    console.log('WallpapersComp callled')
    let {curWallpaper, setCurWallpaper} = useContext(UserContext);

  return (
          <div className='bg-gray-900 w-4/5 '>
            <div className='h-1/3 bg-blue-900 text-white flex  '>
              <img src={curWallpaper} className="h-auto ml-auto mr-auto m-4"></img>
            </div>
            <div className=' text-white h-2/3 flex flex-wrap justify-around m-9'>
              <img src={tajmahal} className="h-1/3 " onClick={()=>{setCurWallpaper(tajmahal)}}></img>
              <img src={skull} className="h-1/3 " onClick={()=>{setCurWallpaper(skull)}}></img>
              <img src={birdy} className="h-1/3 " onClick={()=>{setCurWallpaper(birdy)}}></img>
              <img src={nerd} className="h-1/3 " onClick={()=>{setCurWallpaper(nerd)}}></img>
              <img src={maldives} className="h-1/3 " onClick={()=>{setCurWallpaper(maldives)}}></img>
              <img src={zaza} className="h-1/3 " onClick={()=>{setCurWallpaper(zaza)}}></img>
            </div>
            
          </div>
  )
}

export default WallpapersComp