import React, { useState } from "react";
import "./ContactUs.css";



const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAppClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const contactItems = [
    {
      name: "Telegram",
      subtitle: "Contact now",
      icon: '/icons/telegram.png',
      link: "https://t.me/Official8JJGames",
    },
    {
      name: "WhatsApp",
      subtitle: "Contact Now",
      icon: '/icons/whatsapp1.png',
      link: "https://chat.whatsapp.com/EP5RmVKop9rHPrmCxP5Krp?mode=wwc",
    },
    {
      name: "Instagram",
      subtitle: "Contact Now",
      icon: '/icons/insta.png',
      link: "https://www.instagram.com/8jj_gamesofficial?igsh=MWEwamhsaXcwMWNwcw==",
    },
    {
      name: "APP",
      subtitle: "Download",
      icon: '/icons/download-app.png',
      action: handleAppClick,
    },
  ];

  const apps = [
    { name: "8 IPL", img: '/images/8IPL.png', link: "https://www.8ipl.cc/?languageCode=en&id=375997529" },
    { name: "9 IPL", img: '/images/9IPL.png', link: "https://9ipl.co/?languageCode=en&dl=31bjvo" },
    { name: "BMB IPL", img: '/images/BMBIPL.png', link: "https://www.bmbipl.vip/?languageCode=en&dl=ejmqd1" },
    { name: "BLR IPL", img: '/images/8IPL1.png', link: "https://blripl.com" },
  ];

  return (
    <div className="contact-section">
      <div className="section-header">
        <img src='/icons/contact-us.png' alt="Contact" className="section-icon" />
        <span>CONTACT US</span>
      </div>

      <div className="contact-grid">
        {contactItems.map((item, i) =>
          item.action ? (
            <div key={i} className="contact-card" onClick={item.action}>
              <img src={item.icon} alt={item.name} className="contact-icon" />
              <div>
                <h4>{item.name}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ) : (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <img src={item.icon} alt={item.name} className="contact-icon" />
              <div>
                <h4>{item.name}</h4>
                <p>{item.subtitle}</p>
              </div>
            </a>
          )
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Download APP</h3>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="app-grid">
              {apps.map((app, i) => (
                <a
                  key={i}
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  className="app-card"
                >
                  <img src={app.img} alt={app.name} />
                  <p>{app.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
