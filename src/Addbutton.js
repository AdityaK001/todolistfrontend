import React from "react";
import ReactDOM from "react-dom/client";


export default function Addbuttion(props) {
  let status = props.addstatus;
  let colour = status ? "#2358ec" : "grey";
  let cursorstatus = status ? "pointer" : "not-allowed";

  return (
    <button
      type="button"
      className="btn btn-outline-secondary border submit"
      style={{ color: [colour], cursor: [cursorstatus] }}
      onClick={(event) => {
        if (status) {
          props.onsubmit(event);
        }
      }}
    >
      Add
    </button>
  );
}
