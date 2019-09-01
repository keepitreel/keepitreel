import React from "react";

export default function Pagination(props) {
  return (
    <button name={props.name} onClick={() => props.getPage(props.index + 1)}>
      {props.index + 1}
    </button>
  );
}
