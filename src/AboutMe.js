import React, {useContext, useState} from 'react'
import Draggable from 'react-draggable';
import { UserContext } from './context';
function AboutMe() {
    console.log('settings callled')
    const [curAboutSetting, setCurAboutSetting] = useState('skills');
    const [isMaximize, setIsMaximize] = useState(false); 
    const {setShowAboutMe,zindexindex,updatezindexindex} = useContext(UserContext);
    const handleClose = () => {
        setShowAboutMe(false);
    }
    const handleChangeSize = () => {
        setIsMaximize(prev=>!prev);
    }

const SkillsComp = () => {
    return(
        <div className='flex flex-col w-4/5 bg-gray-900 '>
            <div className='p-5'>
                <h1 className='text-2xl text-center text-white'>Technical Skills</h1>
               
            <div className='m-auto text-xl text-left text-white points '>
                <ul>👉 I've worked with wide variety of programming languages & frameworks.</ul>
                <ul>👉 My area of expertise are Full-Stack Development with MERN Stack</ul>
                <ul>👉 Here are my most frequently used</ul>
            <div className='flex flex-row justify-between mt-8 '>
                <div className='w-2/6 '>Languages & Tools
                    <div className="flex flex-wrap items-start w-full mt-2 ">
                            <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Javascript" />
                            <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=ffffff" alt="Python" />
                            <img className="m-1" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                            <img src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=%23ffffff" alt="Git" className="m-1" />
                            <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=ffffff" alt="Firebase" className="m-1" />
                            <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" className="m-1" />
                    </div>
                </div>
                <div className='w-2/6'>Frameworks & Libraries
                    <div className="flex flex-wrap items-start w-full mt-2">
                            <img className="m-1 " src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=ffffff" alt="React" />
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
        <div className='flex flex-col w-4/5 bg-gray-900 '>
            <div className='p-5'>
                <h1 className='text-2xl text-center text-white'>Hey, my name is Ujjwal Devre,</h1>
                <h1 className='text-3xl text-center text-transparent bg-gradient-to-bl from-red-900 to-blue-100 bg-clip-text'> I'm a MERN Stack Developer</h1>
            </div>
            <div className='w-3/6 h-3 ml-auto mr-auto border-2 border-blue-300 border-solid rounded-full shadow-2xl shadow-red-600 animate-pulse ' ></div>
            <div className='m-auto text-xl text-left text-white points '>
                <h1>🏫 I'm a final year Information Technology student currently pursuing B.E @SSGMCE.</h1>
                <h1>👨‍💻 I like building fun projects in my free time.</h1>
                <h1>⚙️ I mostly work with Reactjs(Webapps), ReactNative(Mobile), Python(Scripting).</h1>
                <h1>🤓 I like playing online games or watching twitch livestreams otherwise.</h1>
            </div>
      </div>
    )
}
const ResumeComp = () => {
    return(
      <div className='flex flex-col w-4/5 bg-gray-900 '>
      {/* <embed className="h-full w-full"  src="myresume.pdf" id='embed1' ></embed> */}
    <iframe className="h-full w-full" loading='eager' src={'https://drive.google.com/file/d/1MgUiRrX2-BtRVgZAj9CtK7-GVAqhYpkk/preview?usp=drivesdk'} title="Ujjwal Devre Resume" ></iframe>  
      </div>
    )
}
const ProjectsComp = () => {
    return(
        <div className='flex flex-col  w-4/5 bg-gray-900 overflow-scroll ' >
            <div className='p-5'>
                <h1 className='text-2xl text-center text-white'>My Projects (7)</h1>
                 </div>
            <div className='w-3/6 h-2 ml-auto mr-auto border-4 border-blue-300 border-solid rounded-full shadow-2xl shadow-red-600 animate-pulse ' ></div>
           
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor' onClick={()=>{console.log('kjsdf'); window.open('https://github.com/UjjwalD77/OIBSIP', '_blank', 'noopener,noreferrer')}}>
              <div className='flex flex-row text-xl text-white ' >Pizza Shop App 
            <a href='https://github.com/UjjwalD77/OIBSIP' target="_blank" onClick={()=> console.log('clicked') }>
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white'  alt="github" className='ml-6'></img>
            </a>
                <h1 className='ml-auto'>April 2022</h1>
                </div>
              <li className='ml-4 text-white text-l' >A fullStack Pizza shopping web-app</li>
              <li className='ml-4 text-white text-l' >Completely made form scratch from FrontEnd to Api's </li>
              <li className='ml-4 text-white text-l' >RazorPay Payment API Integrated</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >MongoDB</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >React.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Express.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Node.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >MERN Stack</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >Wordle in React
              <a href='https://github.com/UjjwalD77/Wordle-in-React' target="_blank" >
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white' alt="github" className='ml-6'></img>
              </a>
                <h1 className='ml-auto'>May 2022</h1>
                </div>
              <li className='ml-4 text-white text-l' >Wordle is a popular word guessing quiz made with React.js</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >React.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >CSS</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >Sorting Algorithm Visualizer
              <a href='https://github.com/UjjwalD77/react-sorting-algo-visualizer' target="_blank" >
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white' alt="github" className='ml-6'></img>
              </a>
                <h1 className='ml-auto'>February 2023</h1>
                </div>
              <li className='ml-4 text-white text-l' >A sorting algorithm visualizer with multiple algorithms</li>
              <li className='ml-4 text-white text-l' >Made with React.js</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >React.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Tailwind</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >H-Man 
              <a href='https://github.com/UjjwalD77/H-Man' target="_blank" >
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white' alt="github" className='ml-6'></img>
              </a>
                <h1 className='ml-auto'>March 2022</h1>
                </div>
              <li className='ml-4 text-white text-l' >Hangman is a word guessing puzzle made with React.js</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >React.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >CSS</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >ReactTicTacToe 
              <a href='https://github.com/UjjwalD77/React-TicTacToe' target="_blank">
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white' alt="github" className='ml-6'></img>
              </a>
                <h1 className='ml-auto'>March 2022</h1>
                </div>
              <li className='ml-4 text-white text-l' >React TicTacToe is the classic game made with React.js</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >React.js</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >CSS</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >FullForce.py
              <a href="https://github.com/UjjwalD77/FullForce-Aio-Tool" target="_blank" >
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white'  alt="github" className='ml-6'/>
                </a> 
                <h1 className='ml-auto'>March 2022</h1>
                </div>
              <li className='ml-4 text-white text-l' >A python script to perform various discord operations</li>
              <li className='ml-4 text-white text-l' >Uses discord Api's and User token to perform automation tasks</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Python</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Web-Scrapping</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Discord Api</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Cli</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >KBC.py 
              <a href="https://github.com/UjjwalD77/KBC" target="_blank" >
              <img src='https://img.shields.io/badge/GitHub-1000?style=for-the-badge&logo=github&logoColor=white' alt="github" className='ml-6'></img>
                </a>
                <h1 className='ml-auto'>February 2022</h1>
                </div>
              <li className='ml-4 text-white text-l' >KBC is a CLI based "Who Wants to be a millionaire" or "Kaun Banega CrorePati" like quiz game implemented in Python.</li>
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Python</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Quiz-Game</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >Cli</div>
              </div>
            </div>
            <div className='p-2 hover:m-0 m-4 hover:shadow-2xl hover:shadow-blue-500 align-middle border-2 border-white rounded-lg hover:cursor'>
              <div className='flex flex-row text-xl text-white ' >Private Tutor Finder 
              <h1 className='ml-auto'>April 2020</h1>
                </div>
              
              <li className='ml-4 text-white text-l' >Php based full stack project build as a Diploma final year project.</li>
              <li className='ml-4 text-white text-l' >A platform for students to find tutors and vice-versa</li>
              
              <div className='flex flex-row text-white'>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >PHP</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >MySql</div>
                <div className='p-1 pl-3 pr-3 m-2 border-2 rounded-3xl' >WAMP</div>
              </div>
            </div>
      </div>
    )
}
const EducationComp = () => {
    return(
        <div className='flex flex-col w-4/5 bg-gray-900 pl-4'>
            <div className='m-6 list-disc' >
            <li className='text-2xl font-bold text-white list-disc '>Shree Sant Gajanan Maharaj College of Engineering, Shegaon</li>
            <h1 className='text-gray-300 text-l'>2020-current</h1>
            <h1 className='text-xl text-white'>B.E in Information Technology</h1>
            <h1 className='text-xl text-white'>CGPA: 9.1</h1>
        </div>
        <div className='m-6 list-disc' >
            <li className='text-2xl font-bold text-white '>Bhagwan Mahavir Polytechnic, Surat</li>
            <h1 className='text-gray-300 text-l'>2017-2020</h1>
            <h1 className='text-xl text-white'>Diploma in Information Technology</h1>
            <h1 className='text-xl text-white'>CGPA: 8.4</h1>
        </div>

        <div className='m-6 list-disc' >
            <li className='text-2xl font-bold text-white '>Oxford English High School, Surat</li>
            <h1 className='text-gray-300 text-l'>2017</h1>
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
    onMouseDown={()=>{updatezindexindex('AboutMe');console.log(zindexindex)}}
    >
      <div className={isMaximize?'absolute flex flex-col w-screen h-screen':'absolute flex-col w-4/6 bg-black h-5/6'} style={{zIndex:  (zindexindex.AboutMe.toString()) }}>
        <div className='titlebar' onDoubleClick={()=>handleChangeSize()} style={{ backgroundColor: 'grey', color:'white', minHeight: '25px', textAlign: 'center', letterSpacing: 2, fontWeight:'bold', display:'flex', flexDirection:'row', alignItems:'center'}}>
                   
                   <h1 className='flex-auto text-center'>About Me</h1>
                   <h1 className='hover:cursor-pointer ' onClick={()=>{handleChangeSize()}}>🔳</h1>
                   <h1 className='hover:cursor-pointer ' onClick={()=>{handleClose()}}>❌</h1>
                  
        </div>
          <div className='flex w-full h-full bg-black'>
            <div className='flex-col w-1/5 bg-gradient-to-b from-black to-gray-900'>
              <div className='p-4 text-xl text-center text-white align-middle hover:cursor-pointer' onClick={()=>{setCurAboutSetting('about')}}>
                {curAboutSetting === 'about' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text to to-white' >About</h1> : <h1>About</h1>}
              </div>
              <div className='p-4 text-xl text-center text-white align-middle hover:cursor-pointer' onClick={()=>{setCurAboutSetting('skills')}}>
                {curAboutSetting === 'skills' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text to to-white' >Skills</h1> : <h1>Skills</h1>}
              </div>
              <div className='p-4 text-xl text-center text-white align-middle hover:cursor-pointer'  onClick={()=>{setCurAboutSetting('education')}}>
              {curAboutSetting === 'education' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text to to-white' >Education</h1> : <h1>Education</h1>}
              </div>
              <div className='p-4 text-xl text-center text-white align-middle hover:cursor-pointer'  onClick={()=>{setCurAboutSetting('projects')}}>
              {curAboutSetting === 'projects' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text to to-white' >Projects</h1> : <h1>Projects</h1>}
              </div>
              <div className='p-4 text-xl text-center text-white align-middle hover:cursor-pointer'  onClick={()=>{setCurAboutSetting('resume')}}>
              {curAboutSetting === 'resume' ? <h1 className='text-transparent bg-gradient-to-r from-blue-500 bg-clip-text to to-white' >Resume</h1> : <h1>Resume</h1>}
              </div>
            </div>
            {curAboutSetting === 'skills' && <SkillsComp/>}
            {curAboutSetting === 'education' && <EducationComp/>}
            {curAboutSetting === 'about' && <AboutComp/>}
            {curAboutSetting === 'resume' && <ResumeComp/>}
            {curAboutSetting === 'projects' && <ProjectsComp/>}

          </div>
      </div>
        
    </Draggable>
  )
}

export default AboutMe