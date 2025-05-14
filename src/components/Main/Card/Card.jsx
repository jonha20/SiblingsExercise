import React, {useState, useContext} from "react";
import { UserContext } from "../../../context/userContext";

const Card = () => {

 const { data, updateData } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    url: "",
    edad: ""
  });



  return <>
  
  <article>
    <h1>{data.name}</h1>
    <h2>{data.email}</h2>
    <h3>{data.url}</h3>
    <h4>{data.edad}</h4>
  </article>

  </>;
};

export default Card;
