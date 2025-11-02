import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Events from "./pages/Events";
import FooterNav from "./components/FooterNav";
import "./App.css";
import Heaader from "./components/Header/Heaader";

function App() {
  return (
    <Router>
      <div className="outer-wrapper">
        <div className="mobile-container">
          <Heaader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
          </Routes>
          <FooterNav />
        </div>
      </div>
    </Router>
  );
}

export default App;
