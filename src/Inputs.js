import React from "react";
import ReactDOM from "react-dom/client";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import { useState, useEffect } from "react";
import Extrainput from "./Extrainput";
import Taskentry from "./Taskentry";

export default function Inputs(props) {
  const [mouseclick, changeclick] = useState(false);
  const [addform, updatesubmitstatus] = useState(false);
  const [note, setNote] = useState({
    content: ""
  });

  function handleChange(event) {
    let value = event.target.value;
    if (value !== "") {
      updatesubmitstatus(true);
    } else {
      updatesubmitstatus(false);
    }
    setNote(() => {
      return {
        content: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      content: ""
    });
    changeclick(false);
    updatesubmitstatus(false);
    event.preventDefault();
  }

  function Makechange() {
    changeclick(true);
  }
  return (
    <div>
      <form>
        <div className="input-group border rounded-top">
          <div className="input-group-text">
            {mouseclick ? <PanoramaFishEyeRoundedIcon /> : <AddSharpIcon />}
          </div>
          <Taskentry
            onClick={Makechange}
            change={handleChange}
            value={note.content}
          />
        </div>
        {mouseclick && <Extrainput onsubmit={submitNote} addstatus={addform} />}
      </form>
    </div>
  );
}
