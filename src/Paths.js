import Desktop from "./Desktop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LockScreen from "./LockScreen";
import Dock from "./Dock";

function Paths() {

  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/dock" element={<Dock />} />
      </Routes>
    </Router>
  );
}

export default Paths;
