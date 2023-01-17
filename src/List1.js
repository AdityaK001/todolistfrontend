import React from "react";
import ReactDOM from "react-dom/client";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import OfflinePinRoundedIcon from "@mui/icons-material/OfflinePinRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default function List1(props) {
  let checkedicon = <PanoramaFishEyeRoundedIcon />;
  let linedesign = "line-through";

  let notcheckedicon = <OfflinePinRoundedIcon style={{ color: "#03a9f4" }} />;

  function alertfunctin() {
    alert("hi");
  }
  return (
    <div>
      <div className="input-group border rounded">
        <div className="input-group-text left_icon">
          <Checkbox
            checked={false}
            icon={notcheckedicon}
            checkedIcon={checkedicon}
            onChange={() => {
              props.onDelete(props.id);
            }}
          />
        </div>

        <div type="text" className="form-control">
          <span style={{ textDecoration: [linedesign] }}>{props.content}</span>
          <br></br>
          <p>Tasks</p>
        </div>

        <div className="input-group-text right_icon">
          <Checkbox
            icon={<StarBorderIcon />}
            checkedIcon={<StarIcon />}
            onChange={alertfunctin}
          />
        </div>
      </div>
    </div>
  );
}
