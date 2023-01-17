import React from "react";
import ReactDOM from "react-dom/client";

export default function Taskentry(props) {
  return (
    <input
      type="text"
      name="content"
      className="form-control overflowcontroller"
      placeholder="Add a task"
      onClick={(event) => {
        props.onClick(event);
      }}
      onChange={(event) => {
        props.change(event);
      }}
      value={props.value}
    ></input>
  );
}
