import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FooterNav.css";

const FooterNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNewsClick = () => {
    if (location.pathname === "/") {
      const newsSection = document.getElementById("news-section");
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToNews: true } });
    }
  };

  return (
    <nav className="footer-nav">
      <button
        className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <div className="nav-icon-bg">
          <img src="/icons/home.png" alt="Home" className="nav-icon" />
        </div>
        <span>HOME</span>
      </button>

      <button
        className={`nav-item ${
          location.state?.scrollToNews ? "active" : ""
        }`}
        onClick={handleNewsClick}
      >
        <div className="nav-icon-bg">
          <img src="/icons/news-icon.png" alt="News" className="nav-icon" />
        </div>
        <span>NEWS</span>
      </button>

      <button
        className={`nav-item ${
          location.pathname.startsWith("/events") ? "active" : ""
        }`}
        onClick={() => navigate("/events")}
      >
        <div className="nav-icon-bg">
          <img src="/icons/event.png" alt="Events" className="nav-icon" />
        </div>
        <span>EVENT</span>
      </button>
    </nav>
  );
};

export default FooterNav;
