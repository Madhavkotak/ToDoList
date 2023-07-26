import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="main">
      {" "}
      <div className="text">{props.text}</div>
      <button id="delete" onClick={() => props.deletefunc(props.id)}>
        Delete this
      </button>
    </div>
  );
}

export default ListItem;
