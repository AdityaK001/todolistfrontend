import React from "react";
import ReactDOM from "react-dom/client";

import Addbutton from "./Addbutton";

export default function Extrainput(props) {
  return (
    <div className="input-group border rounded-bottom">
      <Addbutton addstatus={props.addstatus} onsubmit={props.onsubmit} />
    </div>
  );
}