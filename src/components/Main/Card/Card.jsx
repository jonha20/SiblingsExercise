import React from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <>
      <div className="card-container">
        <article>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.url}</p>
          <p>{data.edad}</p>
        </article>
      </div>
    </>
  );
};

export default Card;
