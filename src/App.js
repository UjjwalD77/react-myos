import Paths from "./Paths";
import { useState } from "react";
import { UserContext } from './context';

const skull = require('./assests/wallpapers/skull.jpg');
const zaza = require('./assests/wallpapers/zaza.jpg');

function App() {
const [showSettings, setShowSettings] = useState(false);
const [curWallpaper, setCurWallpaper] = useState(zaza);
const [showSpotify, setShowSpotify] = useState(false);
const [showAboutMe, setShowAboutMe] = useState(false);
const [showCMD, setShowCMD] = useState(false);
  return (
    <>
      <UserContext.Provider value={{showSettings, setShowSettings, curWallpaper, setCurWallpaper,showSpotify, setShowSpotify,showAboutMe, setShowAboutMe, showCMD, setShowCMD}}>
        <Paths />
      </UserContext.Provider>
    </>
  );
}

export default App;
