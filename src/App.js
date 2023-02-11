import Paths from "./Paths";
import { useState } from "react";
import { UserContext } from './context';

const zaza = require('./assests/wallpapers/zaza.jpg');

function App() {

  const initialzindexindex = {
    'Settings': 0,
    'AboutMe': 0,
    'Spotify': 0,
    'CMD': 0,
    'ContactMe': 0,
    'VsCode': 0
  }
  const [zindexindex, setzindexindex] = useState(initialzindexindex);
  const [showSettings, setShowSettings] = useState(false);
  const [curWallpaper, setCurWallpaper] = useState(zaza);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showCMD, setShowCMD] = useState(false);
  const [showVscode, setShowVscode] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const updatezindexindex = (name) => {
    let newzindexindex = {...initialzindexindex};
    newzindexindex[name] = 10;
    setzindexindex(newzindexindex);
  }
  return (
    <>
      <UserContext.Provider value={{showVscode, setShowVscode, showContactMe,setShowContactMe,zindexindex,updatezindexindex,showSettings, setShowSettings, curWallpaper, setCurWallpaper,showSpotify, setShowSpotify,showAboutMe, setShowAboutMe, showCMD, setShowCMD}}>
        <Paths />
      </UserContext.Provider>
    </>
  );
}

export default App;
