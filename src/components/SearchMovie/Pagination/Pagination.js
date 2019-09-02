import React from "react";
import "./Pagination.scss";

export default function Pagination(props) {
  return (
    <button
      className="pageButton"
      name={props.name}
      onClick={() => props.getPage(props.index + 1)}
    >
      {props.index + 1}
    </button>
  );
}
