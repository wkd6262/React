import React from "react";

const NewsItem = ({ news }) => {
  const { title, description, url, urlToImage } = news;
  return (
    <ul>
      <li>
        <a href={url} target="_blank" style={{ width: 400, display: "block" }}>
          {" "}
          <img src={urlToImage} alt={title} style={{ width: 200 }} />
        </a>

        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </ul>
  );
};

export default NewsItem;
