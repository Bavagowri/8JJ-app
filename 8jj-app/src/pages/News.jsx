import React from "react";

const News = () => {
  const newsItems = [
    { id: 1, title: "Event 1", description: "Details about event 1" },
    { id: 2, title: "Event 2", description: "Details about event 2" },
  ];

  return (
    <div className="page">
      <h2>News</h2>
      {newsItems.map((item) => (
        <div key={item.id} className="news-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
