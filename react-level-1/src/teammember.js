import React, { Component } from "react";

const Teammember = (props) => {
  return (
    <div className="col-md-4  col-sm-6  border">
      <div className=" card">
        <div className="card-header">
          <img
            style={{
              width: "300px",
              height: "300px",
              align: "center ",
              marginLeft: "20px",
            }}
            src={props.info.img}
          />
          <div className=" card-body ">
            <h1>{props.info.name} </h1>
            <h3>{props.info.position} </h3>
            <h4>{props.info.phone} </h4>
            <h5>{props.info.website} </h5>
            <h1>{props.info.email} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teammember;
