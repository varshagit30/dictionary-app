import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
  const fetchData = async () => {
    const [word, setWord] = useState("");
    const [wordData, setWordData] = useState([]);

    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setWordData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Container className="custom-container" maxWidth="md">
        <Header />
      </Container>
    </div>
  );
}

export default App;
