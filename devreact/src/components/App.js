import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import Text from "./Text";
import Special from "./special";
import Darkmode from "../darkmode";

class App extends Component {
  render() {
    return (
      <div className="container ">
        <body>
          <Header />
          <Text />
          <Special />
          <Darkmode />
        </body>
      </div>
    );
  }
}

export default App;
