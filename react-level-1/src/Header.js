import React from "react";
import "./App.css";
class Header extends React.Component {
  render() {
    const name = "our team";

    return (
      <div className="navbar bg-dark   rounded text-white">
        <h2>{name}</h2>
      </div>
    );
  }
}
export default Header;
