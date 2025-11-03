import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../../data/events.json";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="page event-details">
        <p>Event not found.</p>
      </div>
    );
  }

  return (
    <div className="page event-details">
      {/* 🔙 Back to Events Header */}
      <div className="header-bar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <span className="arrow">←</span> Back to Events
        </button>
      </div>

      {/* Event Tag and Date */}
      <div className="event-meta">
        <span className="event-tag">8JJ EVENTS</span>
        <span className="event-date"> 
          {new Date(event.publishedDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Title */}
      <h2 className="event-title">{event.headline}</h2>

      {/* Banner Image */}
      <img src={event.image} alt={event.headline} className="event-banner" />

      {/* Content */}
      <p className="event-body">{event.body}</p>

      {/* Mission / footer box */}
      <div className="mission-box">
        <p>
          Our mission is to accelerate international expansion, drive
          sustainable growth, and maximize brand penetration and customer
          lifetime value.
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/8jjofficials" target="_blank" rel="noreferrer">
            <img src="/icons/FB.png" alt="Facebook" />
          </a>
          <a href="https://youtube.com/@8jj_gamesofficial?si=eNSRKuTPdeZcCufS" target="_blank" rel="noreferrer">
            <img src="/icons/Youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/8jj_games_official?utm_source=qr&igsh=MWEwamhsaXcwMWNwcw==" target="_blank" rel="noreferrer">
            <img src="/icons/insta.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
