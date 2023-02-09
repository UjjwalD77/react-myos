import React from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';
import { useContext } from 'react';


const ContactMe = () => {
    const {setShowContactMe} = useContext(UserContext);

    const handleClose = () => {
        setShowContactMe(false);
    }
    const handleSend = () =>{

    }
  return (
    <Draggable
    bounds="parent"
    handle='.titlebar'
    >

    <div className='absolute flex flex-col justify-center w-4/6 bg-gradient-to-br from-green-700 to-blue-600 h-4/6 '>
        <div className='titlebar' style={{backgroundColor:'grey', padding: 1, color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'row'}}>
            <h1 className='m-auto' >Contact Me </h1>
            <h1 className='' onClick={()=> handleClose()} >❌ </h1>
        </div>
        <div className='flex flex-col justify-center w-full h-full m-auto '>
            <input required={true} name="nameInput"placeholder='Enter Your Name' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl font-semibold text-center text-white bg-gray-500 rounded-lg' />
            <input name="emailInput"placeholder='Enter Your Email Address (Optional)' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl font-semibold text-center text-white bg-gray-500 rounded-lg' />
            <input name="numberInput"placeholder='Enter Your Contact Number (Optional)' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl font-semibold text-center text-white bg-gray-500 rounded-lg' />
            <textarea name="messageInput" placeholder='Enter Your Message' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl text-center text-white bg-gray-500 rounded-lg max-h-32'/>
        <div className='justify-center w-20 p-2 m-auto text-xl font-semibold text-center text-white hover:cursor-pointer rounded-2xl bg-gradient-to-br from-green-700 to-blue-500' onClick={handleSend}>Send</div>
        </div>

    </div>
    </Draggable>
  )
}

export default ContactMe