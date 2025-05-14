import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const Main = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    url: "",
    edad: "",
  });

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <Form updateData={updateData} />
      <Card data={data} />
    </div>
  );
};

export default Main;
