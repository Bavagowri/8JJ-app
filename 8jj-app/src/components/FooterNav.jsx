import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Newspaper, Calendar } from "lucide-react";

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <NavLink to="/" className="nav-item">
        <Home size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/news" className="nav-item">
        <Newspaper size={20} />
        <span>News</span>
      </NavLink>
      <NavLink to="/events" className="nav-item">
        <Calendar size={20} />
        <span>Events</span>
      </NavLink>
    </nav>
  );
};

export default FooterNav;
