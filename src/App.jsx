import { useState } from "react";
import { UserContext } from "./context/userContext";
import Head from "./components/Head";
import Main from "./components/Main";
import "normalize.css"
import "./App.css";


function App() {
  const [email, setEmail] = useState("");

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <>
      <UserContext.Provider value={{ email, updateEmail }}>
        <Head />
        <Main />
      </UserContext.Provider>
    </>
  );
}

export default App;
