import React from "react";
import TeamMember from "./teamMember";

function Team() {
  return (
    <div className="row">
      <TeamMember
        info={{
          name: "Walter white",
          img: "./images/walter.jpg",
          phone: "+49 12345678",
          website: "walterwhite.com",
          position: "Bryan Cranston",
        }}
      />
      <TeamMember
        info={{
          name: "Jesse Pinkman ",
          img: "./images/jessie.jpg",
          phone: "+49 78654264",
          website: "JessePinkman.com",
          position: "Aaron Paul",
        }}
      />
      <TeamMember
        info={{
          name: "Hank white",
          img: "./images/Hank.jpg",
          phone: "+49 65646268",
          website: "HankShrader.com",
          position: "Dean Norris",
        }}
      />
      <TeamMember
        info={{
          name: "Skyler White",
          img: "./images/Skyler.jpg",
          phone: "+49 4626866",
          website: "Skylerwhite.com",
          position: "Anna Gunn",
        }}
      />

      <TeamMember
        info={{
          name: "Guss Fring",
          img: "./images/guss.jpg",
          phone: "+49 65646268",
          website: "Giancarioesposito.com",
          position: "Giancario esposito",
        }}
      />

      <TeamMember
        info={{
          name: "Saul Goodman",
          img: "./images/Saul.jpg",
          phone: "+49 646268626",
          website: "SaulGodman.com",
          position: "Bob Odenkirk",
        }}
      />
    </div>
  );
}

export default Team;
