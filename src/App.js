import Paths from "./Paths";
import { useState } from "react";
import { UserContext } from './context';
import { useEffect } from "react";
const zaza = require('./assets/wallpapers/zaza.jpg');

function App() {

  const initialzindexindex = {
    'Settings': 0,
    'AboutMe': 0,
    'Spotify': 0,
    'CMD': 0,
    'ContactMe': 0,
    'VsCode': 0,
    'Maps': 0,
    'RacingGame': 0,
    'Nerd': 0,
  }
  const [zindexindex, setzindexindex] = useState(initialzindexindex);
  const [showSettings, setShowSettings] = useState(false);
  const [curWallpaper, setCurWallpaper] = useState(zaza);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showCMD, setShowCMD] = useState(false);
  const [showVscode, setShowVscode] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showMaps, setShowMaps] = useState(false);
  const [showRacingGame, setShowRacingGame] = useState(false);
  const [showNerd, setShowNerd] = useState(false);
  const updatezindexindex = (name) => {
    let newzindexindex = {...initialzindexindex};
    newzindexindex[name] = 10;
    setzindexindex(newzindexindex);
  }
  
  return (
    <div >
     {/* <div onContextMenu={(e)=> e.preventDefault()}> */}
      <UserContext.Provider value={{showNerd, setShowNerd, showRacingGame, setShowRacingGame, showMaps, setShowMaps, showVscode, setShowVscode, showContactMe,setShowContactMe,zindexindex,updatezindexindex,showSettings, setShowSettings, curWallpaper, setCurWallpaper,showSpotify, setShowSpotify,showAboutMe, setShowAboutMe, showCMD, setShowCMD}}>
        <Paths />
      </UserContext.Provider>
    </div>
  );
}

export default App;
