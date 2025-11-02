import React from "react";
import "./AllianceMembers.css";
import aliance from '../../images/group.png'

const allianceLinks = [
  { name: "BLR IPL", img: "/images/BMBIPL.png", link: "https://blripl.com" },
  { name: "9 IPL", img: "/images/9IPL.png", link: "https://9ipl.com" },
  { name: "BMB IPL", img: "/images/BMBIPL.png", link: "https://bmbipl.com" },
  { name: "8 IPL", img: "/images/8IPL.png", link: "https://8ipl.com" }
];

const AllianceMembers = () => {
  return (
    <div className="alliance-section">
      <div className="section-header">
        <img src={aliance} alt="Alliance" className="section-icon" />
        <span>ALLIANCE MEMBER</span>
      </div>
      <div className="logo-grid">
        {allianceLinks.map((a, i) => (
          <a href={a.link} key={i} target="_blank" rel="noreferrer">
            <img src={a.img} alt={a.name} className="logo-item" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllianceMembers;
