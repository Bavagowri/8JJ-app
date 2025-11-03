import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Events from "./pages/Events/Events";
import FooterNav from "./components/FooterNav/FooterNav";
import "./App.css";
import Header from "./components/Header/Header";
import EventDetails from "./pages/EventDetails/EventDetails";



function App() {
  return (
    <Router>
      <div className="outer-wrapper">
        <div className="mobile-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            </Routes>
          <FooterNav />
        </div>
      </div>
    </Router>
  );
}

export default App;
