import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import "./Form.css";

const Form = ({ updateData }) => {
  const { updateEmail } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    url: "",
    edad: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(values);
    updateEmail(values.email);
    setValues({
      name: "",
      email: "",
      url: "",
      edad: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="url"
        value={values.url}
        onChange={handleChange}
        placeholder="URL"
      />
      <input
        type="number"
        name="edad"
        value={values.edad}
        onChange={handleChange}
        placeholder="Edad"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;