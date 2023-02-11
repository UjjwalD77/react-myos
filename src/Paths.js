import Desktop from "./Desktop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LockScreen from "./LockScreen";
function Paths() {

  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </Router>
  );
}

export default Paths;
