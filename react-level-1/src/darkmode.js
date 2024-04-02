import React, { useState } from "react";
import "./App.css";
import "./App.css"; // Assurez-vous d'avoir un fichier CSS pour définir les styles

function darkMode() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default darkMode;
