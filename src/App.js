import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mui from "./pages/MUI";
import DevExtreme from "./pages/DevExtreme";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/MUI" element={<Mui />} />
          <Route path="/DevExtreme" element={<DevExtreme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
