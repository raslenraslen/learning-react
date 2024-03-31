import "./App.css";
import Header from "./Header";
import Team from "./Team";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>hello world</h1>
        <Header />
        <Team />
      </div>
    );
  }
}
export default App;
