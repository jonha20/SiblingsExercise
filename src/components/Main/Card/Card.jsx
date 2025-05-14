import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import "./Card.css";

const Card = () => {
  const { data, updateData } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    url: "",
    edad: "",
  });

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
