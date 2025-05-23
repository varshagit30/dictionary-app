import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import categories from "./components/data/category";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [word, category]);

  return (
    <div className="App">
      <Container className="custom-container" maxWidth="md">
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />

        {meanings && (
          <Definitions meanings={meanings} word={word} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
