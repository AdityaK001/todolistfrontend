import React from "react";
import ReactDOM from "react-dom/client";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List1 from "./List1";
import { LineWeight } from "@mui/icons-material";

export default function CompleteInterface(props) {
  return (
    <div>
      <div className="input-group border rounded">
        <div className="input-group-text left_icon">
          <Checkbox
            icon={<ExpandMoreIcon size="small" />}
            checkedIcon={<ChevronRightIcon size="small" />}
            onChange={() => props.onchange()}
          />
        </div>
        <p type="text" className="form-control">
          Completed <em style={{ fontWeight: "lighter" }}>({props.count})</em>
        </p>
      </div>
      <div>
        {/* {props.list.map((noteItem, index) => {
          return (
            <List1
              key={index}
              id={index}
              content={noteItem.content}
              onDelete={() => {
                props.onDelete(props.id);
              }}
            />
          );
        })} */}
      </div>
    </div>
  );
}
