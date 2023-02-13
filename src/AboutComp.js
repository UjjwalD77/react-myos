import React from 'react'

function AboutComp() {

return (
      <div className='bg-gray-900 w-4/5 flex flex-col '>
        <h1 className=' text-white text-2xl text-center m-auto font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-green-500 to-indigo-500
            animate-text '>MyOS is a simple OS made with ReactJS and TailwindCSS.
        </h1>
        <h1 className='text-white text-xl text-right m-2'>~Made by <a
          href="https://www.linkedin.com/in/ujjwal-devre-35646a153/" target="_blank" class="font-extrabold shadow-md shadow-red-700">Ujjwal Devre</a>
        </h1>
        
      </div>
)
}

export default AboutComp