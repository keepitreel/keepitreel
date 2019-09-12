import React, { Component } from "react";
import axios from "axios";
import "./DeletePost.scss";
import { Redirect } from "react-router-dom";

class DeletePost extends Component {
  constructor() {
    super();
    this.state = {
      deletePost: false
    };
  }
  blogKiller = () => {
    console.log("hit");
    axios
      .delete(`/api/dashboard/deletepost/${this.props.post_id}`)
      .then(res => {
        console.log("res: " + res);
        this.setState({
          deletePost: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="DeletePostComponent">
        {this.state.deletePost && <Redirect to="/dashboard" />}
        <div className="tooltip">
          <i class="fas fa-window-close" onClick={this.blogKiller}></i>
          <span class="tooltiptext">delete blog</span>
        </div>
      </div>
    );
  }
}

export default DeletePost;
