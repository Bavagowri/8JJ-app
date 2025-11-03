import React, { useEffect, useState } from "react";
import eventsData from "../../data/events.json";
import "./News.css";

const News = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Filter and sort by newest date first
    const sorted = [...eventsData].sort(
      (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    setEvents(sorted);
  }, []);

  return (
    <div className="page news-page">
      <div className="section-header">
        <img src="/icons/news.png" alt="News" className="section-icon" />
        <span>NEWS</span>
      </div>

      <div className="news-list">
        {events.map((event) => (
          <div key={event.id} className="news-card">
            <img src={event.image} alt={event.headline} className="news-image" />
            <div className="news-content">
              <p className="news-headline">
                📢 {event.headline.length > 30
                  ? event.headline.slice(0, 30) + "..."
                  : event.headline}
              </p>
              <a href={`/events/${event.id}`} className="news-link">
                See more ▶
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
