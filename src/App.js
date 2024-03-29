import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { teal, amber, grey, deepOrange } from "@mui/material/colors";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: teal[900] },
  },
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <header className="hide-when-mobile">
          <h1>Courses 4 Arab</h1>
          <ul className="flex">
            <li className="main-list">
              <a className="mainlink" href="ww">
                HTML
              </a>
              <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a className="main-link" href="www">
                CSS
              </a>
              <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li className="mini-projects">
                  <a href="">mini projects&nbsp; + </a>
                  <ul className="sub-sub-ul">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a className="main-link" href="#">
                JavaScript
              </a>
              <ul className="sub-ul sub-of-js">
                <li>
                  <a href="">coming soon🔥</a>
                </li>
              </ul>
            </li>
          </ul>
        </header>
        <header className="show-when-mobile">
          <h1>Courses 4 Arab</h1>
          <label className="absolute" htmlFor="burger">
            <i className="fas fa-bars" />
          </label>
          <input id="burger" type="checkbox" />
          <div className="show-on-click">
            <div className="main-div">
              <label htmlFor="html">
                HTML <i className="fas fa-plus" />
              </label>
              <input id="html" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="css">
                CSS <i className="fas fa-plus" />
              </label>
              <input id="css" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li>
                  <label className="mini-projects" htmlFor="mini">
                    mini projects <i className="fas fa-plus" />
                  </label>
                  <input id="mini" type="checkbox" />
                  <ul className="sub-sub-div">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="js">
                JavaScript <i className="fas fa-plus" />
              </label>
              <input id="js" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <a href="">coming soon🔥</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main>
          Home page <br />
          welcome to my page <br />
        </main>

        <footer>
          Designed and developed by Courses4Arab.com
          <span>🧡</span>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
