import React, { Component } from "react";

class File2 extends Component {
  methode() {
    return <h5>missaoui</h5>;
  }

  render() {
    const name = "rasleen";
    const name2 = this.methode();

    return (
      <h1>
        {" "}
        {name}
        {name2}{" "}
      </h1>
    );
  }
}

export default File2;
