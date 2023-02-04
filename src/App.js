


function App() {
  return (
    <div className="flex bg-gradient-to-r from-black to-gray-900 w-screen h-screen justify-center">
      <div className='flex flex-col justify-between '>
        <h1 className='text-5xl text-white p-8 font-mono '>
        Welcome to MyOS</h1>
        <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 cursor-pointer" >
          <div class=" absolute right-1/2 bottom-1/2  border-solid shadow-2xl shadow-red-600  animate-pulse  w-0 h-28 border-blue-300 border-4 rounded-full"></div>
          <div class="border-t-transparent border-solid shadow-2xl shadow-red-600  animate-pulse  rounded-full border-blue-300 border-8 h-48 w-48"></div>
        </div>
        <div className="  flex flex-row justify-evenly pb-3">
          <h1 className="text-white text-2xl bg-gradient-to-r from-red-900 to-blue-900 brightness-75 rounded-xl p-2 cursor-pointer" >LinkedIn</h1>
          <h1 className="text-white text-2xl bg-gradient-to-r from-blue-900 to-red-900 brightness-75 rounded-xl p-2 cursor-pointer" >GitHub</h1>
        </div>

      </div>
    </div>
  );
}

export default App;
