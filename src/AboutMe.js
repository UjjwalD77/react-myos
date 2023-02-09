import React, {useContext, useState} from 'react'
import Draggable, {DraggableCore} from 'react-draggable';
import AboutComp from './AboutComp';
import { UserContext } from './context';

function AboutMe() {
    console.log('settings callled')
    const [curAboutSetting, setCurAboutSetting] = useState('skills');
    const {setShowAboutMe} = useContext(UserContext);
    const handleClose = () => {
        setShowAboutMe(false);
    }
const SkillsComp = () => {
    return(
        <div className='bg-gray-900 w-4/5 flex flex-col '>
            <div className='p-5'>
                <h1 className='text-2xl text-white text-center'>Technical Skills</h1>
               
            <div className='points text-white text-xl text-left m-auto '>
                <ul>👉 I've worked with wide variety of programming languages & frameworks.</ul>
                <ul>👉 My area of expertise are Full-Stack Development with MERN Stack</ul>
                <ul>👉 Here are my most frequently used</ul>
            <div className='flex flex-row justify-between mt-8 '>
                <div className='w-2/6 '>Languages & Tools
                    <div className="flex flex-wrap items-start w-full mt-2  ">
                            <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Javascript" />
                            <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=ffffff" alt="Python" />
                            <img className="m-1" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                            <img src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=%23ffffff" alt="Git" className="m-1" />
                            <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=ffffff" alt="Firebase" className="m-1" />
                            <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" className="m-1" />
                    </div>
                </div>
                <div className='w-2/6'>Frameworks & Libraries
                    <div className="flex flex-wrap  items-start w-full mt-2">
                            <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=ffffff" alt="React" />
                            <img className="m-1" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React-Native" />
                            <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind css" />
                            <img src="https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=ffffff" alt="node.js" className="m-1" />
                            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express.js" className="m-1" />
                    </div>
                </div>
            </div>
            </div>

      </div>
      </div>
    )
}
const AboutComp = () => {
    return(
        <div className='bg-gray-900 w-4/5 flex flex-col '>
            <div className='p-5'>
                <h1 className='text-2xl text-white text-center'>Hey, my name is Ujjwal Devre,</h1>
                <h1 className='text-center text-3xl text-transparent bg-gradient-to-bl from-red-900 to-blue-100 bg-clip-text'> I'm a MERN Stack Developer</h1>
            </div>
            <div className='border-solid shadow-2xl shadow-red-600  animate-pulse  rounded-full border-blue-300 border-2 h-3 w-3/6 ml-auto mr-auto ' ></div>
            <div className='points text-white text-xl text-left m-auto  '>
                <h1>🏫 I'm a final year Information Technology student currently pursuing B.E @SSGMCE.</h1>
                <h1>👨‍💻 I like building fun projects in my free time.</h1>
                <h1>⚙️ I mostly work with Reactjs(Webapps), ReactNative(Mobile), Python(Scripting).</h1>
                <h1>🤓 I like playing online games or watching twitch livestreams otherwise.</h1>
            </div>
      </div>
    )
}
const EducationComp = () => {
    return(
        <div className='bg-gray-900 w-4/5 flex flex-col '>
            <div className='m-6 list-disc' >
            <li className='text-2xl list-disc text-white font-bold   '>Shree Sant Gajanan Maharaj College of Engineering, Shegaon</li>
            <h1 className='text-l text-gray-300'>2020-current</h1>
            <h1 className='text-xl text-white'>B.E in Information Technology</h1>
            <h1 className='text-xl text-white'>CGPA: 9.1</h1>
        </div>
        <div className='m-6 list-disc' >
            <li className='text-2xl text-white font-bold '>Bhagwan Mahavir Polytechnic, Surat</li>
            <h1 className='text-l text-gray-300'>2017-2020</h1>
            <h1 className='text-xl text-white'>Diploma in Information Technology</h1>
            <h1 className='text-xl text-white'>CGPA: 8.4</h1>
        </div>

        <div className='m-6 list-disc' >
            <li className='text-2xl text-white font-bold '>Oxford English High School, Surat</li>
            <h1 className='text-l text-gray-300'>2017</h1>
            <h1 className='text-xl text-white'>Class 10th</h1>
            <h1 className='text-xl text-white'>Percentage 64%</h1>
        </div>
      </div>
    )
}
  return (
    <Draggable
    bounds="parent"
    handle=".titlebar"
    >
      <div className='absolute h-5/6 w-4/6 bg-black flex-col' >
        <div className='titlebar'  style={{backgroundColor: 'grey', color:'white', height: '4vmin', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row'}}>
                   
                   <h1 className='text-center flex-auto'>About Me</h1>
                   <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                  
        </div>
          <div className='absolute h-full w-full bg-black flex'>
            <div className='bg-gradient-to-b from-black to-gray-900 w-1/5 flex-col'>
              <div className='text-xl text-white align-middle text-center p-4 hover:cursor-pointer' onClick={()=>{setCurAboutSetting('about')}}>
                {curAboutSetting === 'about' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text  to to-white' >About</h1> : <h1>About</h1>}
              </div>
              <div className='text-xl text-white align-middle text-center p-4 hover:cursor-pointer' onClick={()=>{setCurAboutSetting('skills')}}>
                {curAboutSetting === 'skills' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text  to to-white' >Skills</h1> : <h1>Skills</h1>}
              </div>
              <div className='text-xl text-white align-middle text-center p-4 hover:cursor-pointer'  onClick={()=>{setCurAboutSetting('education')}}>
              {curAboutSetting === 'education' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text  to to-white' >Education</h1> : <h1>Education</h1>}
              </div>
            </div>
            {curAboutSetting === 'skills' && <SkillsComp/>}
            {curAboutSetting === 'education' && <EducationComp/>}
            {curAboutSetting === 'about' && <AboutComp/>}

          </div>
      </div>
        
    </Draggable>
  )
}

export default AboutMe