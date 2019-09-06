import React from "react";
import axios from "axios";
import "./DeletePost.scss";

export default function DeletePost(props) {
  function blogKiller() {
    axios
      .delete(`/api/dashboard/deletepost/${props.post_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="DeletePostComponent">
      <div className="tooltip">
        <i class="fas fa-window-close" onClick={blogKiller}></i>
        <span class="tooltiptext">
          Are you sure you want to delete the blog? You can edit too you know.
        </span>
      </div>
    </div>
  );
}
