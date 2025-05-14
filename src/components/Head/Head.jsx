import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Head = () => {

const {email} = useContext(UserContext);

  return <>
    <h2>Tu email es: {email}</h2>
  </>;
};

export default Head;
