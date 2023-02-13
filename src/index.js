import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "@firefox-devtools/react-contextmenu";
import { UserContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const handleEnterFullScreen = () => {
  document.body.requestFullscreen();
}
const handleExitFullScreen = () => {
  document.exitFullscreen();
}
const HandleShowWallpaper = () => {
  const {setShowSettings,showSettings} =  useContext(UserContext);
  setShowSettings(true);
  console.log(showSettings)
}
const HandleLockScreen = () => {
  const navigate = useNavigate();
  navigate('/');
}
root.render(
  <React.StrictMode>
    <ContextMenuTrigger id="same_unique_identifier"
    holdToDisplay={-1}
    >
    {/* <div onContextMenu={(e)=> e.preventDefault()}> */}
      <App />
      </ContextMenuTrigger>

      <ContextMenu id="same_unique_identifier" hideOnLeave="true" className='w-40 text-white rounded-md bg-stone-900'>
        <MenuItem data={{foo: 'bar'}} className="p-1 cursor-pointer hover:" >
          Refresh
        </MenuItem>
        <MenuItem data={{foo: 'bar'}} hideOnLeave="true" className="p-1 cursor-pointer hover:" onClick={()=>handleEnterFullScreen()}>
        Enter Full Screen
        </MenuItem>
        <MenuItem data={{foo: 'bar'}} hideOnLeave="true" className="p-1 cursor-pointer hover:" onClick={()=>handleExitFullScreen()}>
        Exit Full Screen
        </MenuItem>
        {/* <MenuItem data={{foo: 'bar'}} hideOnLeave="true" className="p-1 cursor-pointer hover:" onClick={()=>HandleShowWallpaper()}>
          Change Wallpaper
        </MenuItem>
        <MenuItem data={{foo: 'bar'}} hideOnLeave="true" className="p-1 cursor-pointer hover:" onClick={()=>{
          const navigate = useNavigate();
          navigate('/');
          }}>
          Lock Screen
        </MenuItem> */}
      </ContextMenu>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
