import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [category, setCategory] = useState("en");

  const fetchData = async () => {
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
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
