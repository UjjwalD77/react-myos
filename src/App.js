import Paths from "./Paths";
import { useState } from "react";
import { UserContext } from './context';

const skull = require('./assests/wallpapers/skull.jpg');
const zaza = require('./assests/wallpapers/zaza.jpg');

function App() {
const [showSettings, setShowSettings] = useState(false);
const [curWallpaper, setCurWallpaper] = useState(zaza);
const [showSpotify, setShowSpotify] = useState(false);
  return (
    <>
      <UserContext.Provider value={{showSettings, setShowSettings, curWallpaper, setCurWallpaper,showSpotify, setShowSpotify}}>
        <Paths />
      </UserContext.Provider>
    </>
  );
}

export default App;
