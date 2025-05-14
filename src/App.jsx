import { useState } from "react";
import "./App.css";
import { UserContext } from "./context/userContext";
import Head from "./components/Head";
import Main from "./components/Main";

function App() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  };

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <>
      <UserContext.Provider value={{ data, updateData, email, updateEmail }}>
        <Head />
        <Main />
      </UserContext.Provider>
    </>
  );
}

export default App;
