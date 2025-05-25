import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { Container, Switch } from "@mui/material";
import { withStyles } from "@mui/styles";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import categories from "./components/data/category";
import { grey } from "@mui/material/colors";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

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

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container className="custom-container" maxWidth="md">
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightTheme={LightTheme}
        />

        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            category={category}
            LightTheme={LightTheme}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
