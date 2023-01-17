import React from "react";
import ReactDOM from "react-dom/client";

export default function Title1() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div>
      <h4>
        My Day <br></br>
        <br></br>
        <p>{date}</p>
      </h4>
    </div>
  );
}
