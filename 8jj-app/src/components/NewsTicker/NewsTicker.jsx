import React, { useEffect, useState } from "react";
import eventsData from "../../data/events.json";
import "./NewsTicker.css";

const NewsTicker = () => {
  const [newsEvents, setNewsEvents] = useState([]);

  useEffect(() => {
    const filtered = eventsData.filter((event) => event.showInNews);
    setNewsEvents(filtered);
  }, []);

  return (
    <div className="news-ticker">
      <div className="ticker-label">📰 Latest:</div>
      <div className="ticker-content">
        <div className="ticker-track">
          {newsEvents.map((news, index) => (
            <span key={index} className="ticker-item">
              {news.headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
