import React from 'react'
import Draggable from 'react-draggable'
import { UserContext } from './context';
import { useContext,useState } from 'react';

import MessageApi from './MessageApi';
const ContactMe = () => {
    const {setShowContactMe,zindexindex,updatezindexindex} = useContext(UserContext);
    const [isMaximize, setIsMaximize] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const handleClose = () => {
        setShowContactMe(false);
    }
    const handleChangeSize = () => {
        setIsMaximize(prev=>!prev);
    }
    const handleSentSuccesfully = (sent) => {
        if(sent == true){
            setIsSent(true);
            setTimeout(()=>{setIsSent(false)},2000);
        }
        else{
            alert('Something went wrong');
        }
        
    }

    const handleSend = async() =>{
        const name = document.getElementsByName('nameInput')[0].value;
        const email = document.getElementsByName('emailInput')[0].value;
        const contactno = document.getElementsByName('numberInput')[0].value;
        const message = document.getElementsByName('messageInput')[0].value;
        const request = await MessageApi(name,email,contactno,message);
        handleSentSuccesfully(request);
    }
  return (
    <Draggable
    bounds="parent"
    handle='.titlebar'
    onMouseDown={()=>{updatezindexindex('ContactMe');console.log(zindexindex)}}

    >

    <div className= {isMaximize ? 'absolute flex flex-col justify-center w-screen h-screen bg-gradient-to-br from-green-700 to-blue-600  ':
                'absolute flex flex-col justify-center w-4/6 bg-gradient-to-br from-green-700 to-blue-600 h-4/6 '} style={{zIndex:  (zindexindex.ContactMe.toString()) }}
            >
        <div className='titlebar' style={{backgroundColor:'grey', padding: 1, color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems:'center'}}>
            <h1 className='m-auto' >Contact Me </h1>
            <h1 className='hover:cursor-pointer' onClick={()=> handleChangeSize()} >🔳 </h1>
            <h1 className='hover:cursor-pointer' onClick={()=> handleClose()} >❌ </h1>
        </div>
        <div className='flex flex-col justify-center w-full h-full m-auto '>
            {isSent && 
            <div className='absolute bg-green-600 p-3 text-white text-xl font-extrabold top-9  rounded-3xl rounded-tr-none right-3  ' >
                Message Successfully Sent!</div>}
            <input required={true} name="nameInput"placeholder='Enter Your Name' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl font-semibold text-center text-white bg-gray-500 rounded-lg' />
            <input name="emailInput"placeholder='Enter Your Email Address (Optional)' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl font-semibold text-center text-white bg-gray-500 rounded-lg' />
            <input name="numberInput"placeholder='Enter Your Contact Number (Optional)' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl font-semibold text-center text-white bg-gray-500 rounded-lg' />
            <textarea name="messageInput" placeholder='Enter Your Message' className='justify-center p-3 mt-4 ml-56 mr-56 text-xl text-center text-white bg-gray-500 rounded-lg max-h-32'/>
            <div className='justify-center w-20 p-2 m-auto text-xl font-semibold text-center text-white hover:cursor-pointer rounded-2xl bg-gradient-to-br from-green-700 to-blue-500' onClick={()=>handleSend()}>Send</div>
        </div>

    </div>
    </Draggable>
  )
}

export default ContactMe