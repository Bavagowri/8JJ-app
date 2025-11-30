import React from "react";
import eventsData from "../../data/events.json";
import "./EventsPreview.css";

const EventsPreview = () => {
  // Sort events by date (latest first)
  const sortedEvents = [...eventsData].sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  // Take only first 3
  const topEvents = sortedEvents.slice(0, 3);

  return (
    <div className="news-preview">
      <div className="section-header">
        <img src="/icons/news.png" alt="News" className="section-icon" />
        <span>NEWS</span>
      </div>

      {topEvents.map((event) => (
        <div key={event.id} className="news-card">
          <img src={event.image} alt={event.headline} className="news-img" />
          <div className="news-info">
            <p className="news-title">
              📣{" "}
              {event.headline.length > 35
                ? event.headline.slice(0, 20) + " ..."
                : event.headline}
            </p>
            <a href={`/events/${event.id}`} className="see-more">
              See more ▶
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsPreview;
