import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable';

function Settings() {
    console.log('settings callled')
  return (
    <Draggable>
        <div>I can now be moved around!</div>
    </Draggable>
  )
}

export default Settings