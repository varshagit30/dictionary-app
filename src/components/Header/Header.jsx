import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./Header.css";
import { MenuItem, TextField } from "@mui/material";
import categories from "../../components/data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ffff",
      },
      type: "dark",
    },
  });

  console.log(category);

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            label="Language"
          >
            {categories.map((item) => (
              <MenuItem key={item.label} value={item.label}>
                {item.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
