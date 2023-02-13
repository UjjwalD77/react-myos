import React, { useContext } from 'react'
import { UserContext } from './context';

const tajmahal = require('./assests/wallpapers/tajmahal.jpg');
const skull = require('./assests/wallpapers/skull.jpg');
const birdy = require('./assests/wallpapers/birdy.jpg');
const nerd = require('./assests/wallpapers/nerd.jpg');
const maldives = require('./assests/wallpapers/maldives.jpg');
const zaza = require('./assests/wallpapers/zaza.jpg');



function WallpapersComp() {
    let {curWallpaper, setCurWallpaper} = useContext(UserContext);

  return (
          <div className='bg-gray-900 w-4/5 flex flex-col '>
            <div className='h-1/3 bg-blue-900 text-white flex '>
              <img src={curWallpaper} className=" ml-auto mr-auto m-4" alt="currentWallpaper"></img>
            </div>
            <div className=' text-white  flex flex-wrap justify-around m-9 overflow-scroll'>
              <img src={tajmahal} className="h-1/3 " onClick={()=>{setCurWallpaper(tajmahal)}} alt="tajmahal" ></img>
              <img src={skull} className="h-1/3 " onClick={()=>{setCurWallpaper(skull)}} alt="skull" ></img>
              <img src={birdy} className="h-1/3 " onClick={()=>{setCurWallpaper(birdy)}} alt="birdy" ></img>
              <img src={nerd} className="h-1/3 " onClick={()=>{setCurWallpaper(nerd)}} alt="nerd" ></img>
              <img src={maldives} className="h-1/3 " onClick={()=>{setCurWallpaper(maldives)}} alt="maldives" ></img>
              <img src={zaza} className="h-1/3 " onClick={()=>{setCurWallpaper(zaza)}} alt="zaza" ></img>
            </div>
            
          </div>
  )
}

export default WallpapersComp