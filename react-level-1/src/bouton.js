import React, { Component } from "react";
import "./App.css";
class Bouton extends Component {
  constructor() {
    super();
    this.state = { Number: 0 };
  }
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>{this.state.Number}</h1>
          <button className="btn btn-primary">Click me!</button>
        </div>
      </div>
    );
  }
}

export default Bouton;
