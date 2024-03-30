import React from "react";

let title = "";
const client = "programmer ";
if (client === "designer") {
  title = "programming is my life ";
} else {
  title = "web is my life ";
}

const info = {
  name: "Raslen",
  prenom: "missaoui ",
};

/* client ==="designer " "web is my life " ? :  "programming is my life " */

const Header = () => {
  return (
    <div className=" navbar bg-primary">
      <h1> {title} </h1>
      hello {info.name + " " + info.prenom}
    </div>
  );
};

export default Header;
