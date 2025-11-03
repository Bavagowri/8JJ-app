import React, { useState } from "react";
import "./SocialGlobalBanner.css";

const SocialGlobalBanner = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      name: "India",
      flag: "/images/flags/india.png",
      phones: ["+91 73389 90678", "+91 93618 07700"],
      address:
        "Financial District, Nanakramguda, Hyderabad, Telangana 500032",
    },
    {
      name: "America",
      flag: "/images/flags/USA.png",
      phones: ["+1 646210 4904"],
      address: "2929 Allen Parkway, Houston 77019",
    },
    {
      name: "Sri Lanka",
      flag: "/images/flags/Srilanka.png",
      phones: ["+94 77 808 7141", "+94 76 769 3028"],
      address: "324 Havelock Rd, Colombo 00500",
    },
    {
      name: "Vietnam",
      flag: "/images/flags/Viatnam.png",
      phones: ["+84 352 477 984"],
      address: "Đinh Tiên Hoàng, Quận 1",
    },
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => setSelectedCountry(null);

  return (
    <div className="social-global-banner">
      {/* 🌍 Social Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com/8jjofficials" target="_blank" rel="noreferrer">
          <img src="/icons/FB.png" alt="Facebook" />
        </a>
        <a href="https://youtube.com/@8jj_gamesofficial?si=eNSRKuTPdeZcCufS" target="_blank" rel="noreferrer">
          <img src="/icons/Youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.tiktok.com/@8jjofficials" target="_blank" rel="noreferrer">
          <img src="/icons/Tiktok.png" alt="TikTok" />
        </a>
        <a href="https://x.com/8JJ_Games?t=4GAWbf3qpFkbP4y8mrmWwQ&s=08" target="_blank" rel="noreferrer">
          <img src="/icons/x.jpg" alt="X" />
        </a>
        <a href="https://www.twitch.tv/8jj_gamesofficial" target="_blank" rel="noreferrer">
          <img src="/icons/Twitch.png" alt="Twitch" />
        </a>
      </div>

      <hr className="divider" />

      {/* 🌎 Global Presence */}
      <div className="global-presence">
        <div className="section-header">
          <img src="/icons/world.png" alt="Globe" className="section-icon" />
          <span>GLOBAL PRESENCE</span>
        </div>

        <div className="country-grid">
          {countries.map((country, i) => (
            <div
              key={i}
              className="country-item"
              onClick={() => handleCountryClick(country)}
            >
              <img src={country.flag} alt={country.name} />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🏢 Partner Banner */}
      <div className="partner-banner">
        <img src="/images/banner11.jpg" alt="Partners" />
      </div>

      {/* 📍 Country Modal */}
      {selectedCountry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="modal-flag"
              />
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {selectedCountry.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="phone-btn"
                >
                  {phone}
                </a>
              ))}
              <p className="address">{selectedCountry.address}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialGlobalBanner;
