import React, { Component } from "react";
import Teammember from "./teammember";

class Team extends Component {
  constructor() {
    super();
  }
  eventhendler() {
    console.log(Teammember[0]);
  }
  render() {
    return (
      <div className="row">
        <button className="btn btn-primary" onClick={this.eventhendler}>
          show the teams{" "}
        </button>
        <Teammember
          info={{
            name: "Walter white",
            img: "./images/walter.jpg",
            phone: "+49 12345678",
            website: "walterwhite.com",
            position: "Bryan Cranston",
          }}
        />
        <Teammember
          info={{
            name: "Jesse Pinkman ",
            img: "./images/jessie.jpg",
            phone: "+49 78654264",
            website: "JessePinkman.com",
            position: "Aaron Paul",
          }}
        />
        <Teammember
          info={{
            name: "Hank white",
            img: "./images/Hank.jpg",
            phone: "+49 65646268",
            website: "HankShrader.com",
            position: "Dean Norris",
          }}
        />
        <Teammember
          info={{
            name: "Skyler White",
            img: "./images/Skyler.jpg",
            phone: "+49 4626866",
            website: "Skylerwhite.com",
            position: "Anna Gunn",
          }}
        />

        <Teammember
          info={{
            name: "Guss Fring",
            img: "./images/guss.jpg",
            phone: "+49 65646268",
            website: "Giancarioesposito.com",
            position: "Giancario esposito",
          }}
        />
        <Teammember
          info={{
            name: "Walter white Jr",
            img: "./images/whitejr.jpg",
            phone: "+49 465628684",
            website: "WalterWhitejr.com",
            position: "RJ mitte",
          }}
        />

        <Teammember
          info={{
            name: "Saul Goodman",
            img: "./images/Saul.jpg",
            phone: "+49 646268626",
            website: "SaulGodman.com",
            position: "Bob Odenkirk",
          }}
        />
        <Teammember
          info={{
            name: "Mike Ehrmantraut",
            img: "./images/mike.jpg",
            phone: "+49 646268626",
            website: "SaulGodman.com",
            position: "Jonathan Banks",
          }}
        />
        <Teammember
          info={{
            name: "Jane Margolis",
            img: "./images/jane.jpg",
            phone: "+49 5646267",
            website: "JaneMargoilis.com",
            position: "Krysten Alyce Ritter",
          }}
        />
      </div>
    );
  }
}

export default Team;
