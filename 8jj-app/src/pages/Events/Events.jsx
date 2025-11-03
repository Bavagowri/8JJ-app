import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import eventsData from "../../data/events.json";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // 👈 Hook for navigation

  useEffect(() => {
    // Sort by newest first
    const sorted = [...eventsData].sort(
      (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    setEvents(sorted);
  }, []);

  // Filtered results
  const filteredEvents = events.filter((event) =>
    event.headline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click to navigate
  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="page news-page">
      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <img src="/icons/search.png" alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 📰 Events List */}
      <div className="news-list">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="news-card"
            onClick={() => handleEventClick(event.id)} // 👈 Navigate on click
          >
            <img
              src={event.image}
              alt={event.headline}
              className="news-image"
            />
            <div className="news-content">
              <p className="news-headline">{event.headline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
