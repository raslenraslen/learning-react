import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import File2 from "./File2";
import File3 from "./file3";
import Team from "./team";
import Teammember from "./teammember";
import MenuBar from "./menu-bar";
import Bouton from "./bouton";

class App extends Component {
  constructor() {
    super();
    this.state = { darkMode: false };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    const { darkMode } = this.state;
    return (
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <MenuBar />
        <Header />

        {/*<File2 />
        <File3 name3="raslen22" />
        <File3 name3="raslen22" />
    <File3 name3="raslen22" />  */}
        <Team />
        {/*}  do u watch football ? {this.state.answear} */}
        <button
          className={`toggle-button ${
            darkMode ? "dark-mode-button" : "light-mode-button"
          }`}
          onClick={this.toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
        <Bouton />
      </div>
    );
  }
}

export default App;
