import React from "react";
import "../styles/card.css";

const NewsCard = ({ article }) => {
  return (
    <div className="card" style={{ backgroundColor: "white" }}>
      <img src={article.image} alt={article.title} />
      <h2 style={{ color: "black" }}>{article.title}</h2>
      <p style={{ color: "black" }}>{article?.description?.slice(0, 120)}...</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
