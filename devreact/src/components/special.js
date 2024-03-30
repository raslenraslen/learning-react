import React from "react";
import Specialitem from "./specialitem";

const Special = () => {
  return (
    <div className=" bg-dark text-white   list-group">
      <u1>
        <Specialitem
          img="https://www.pinterest.com/pin/12736811440778344/"
          width="200px"
          height="700px"
        />

        <li className="list-group-item">
          <img src="https://picsum.photos/30/20/?blur=2"></img>
          <input type="checkbox" id="twitter" />
          <label> twitter </label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" id="instagram" />
          <label>instagram </label>
        </li>
      </u1>
    </div>
  );
};

export default Special;
