import React from "react";
import "./AllianceMembers.css";
import aliance from '../../images/group.png'

const allianceLinks = [
  { name: "MAAIPL", img: "/images/MAAIPL2.png", link: "MAAIPL.apk" },
  { name: "GNGIPL", img: "/images/GNGIPL2.png", link: "GNGIPL.apk" },
  { name: "8IPL", img: "/images/8IPL1.png", link: "8IPL.apk" },
  { name: "9IPL", img: "/images/9IPL.png", link: "9IPL.apk" },
  { name: "BMBIPL", img: "/images/BMBIPL.png", link: "BMBIPL.apk" },
  { name: "BLRIPL", img: "/images/BLRIPL1.png", link: "BLRIPL.apk" }

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
