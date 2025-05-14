import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";

const Form = () => {
  const { email, updateEmail } = useContext(UserContext);
  const { data, updateData } = useContext(UserContext);

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
    console.log(values.email);
    updateEmail(values.email);
    setValues({
      name: "",
      email: "",
      url: "",
      edad: "",
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <input
          type="number"
          name="edad"
          value={values.edad}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
