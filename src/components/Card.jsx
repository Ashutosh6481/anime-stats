import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link, imageUrl,id }) => {
  return (
    <div className="card">
      <Link to={`/anime/${id}`}>
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card-content">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
