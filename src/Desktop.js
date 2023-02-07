import React from 'react'
import Dock from './Dock'
import Settings from './settings';
const tajmahal = require('./assests/wallpapers/tajmahal.jpg');

function Desktop() {
  return (
    <div class=" w-screen h-screen flex  bg-blue-500"
     style={{ backgroundImage: `url(${tajmahal})`, backfaceVisibility: 'visible', backgroundSize: "cover"}}
      >
        <Dock />
        {/* ADD GLOBAL CONTEXT AND SHOW THE DRAGGABLE COMPONENTS IF THEY ARE ENABLED IN THE CONTEXT */}
        <Settings/>
        
    </div>
  )
}

export default Desktop