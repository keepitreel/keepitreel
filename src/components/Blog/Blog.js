import React, { Component } from "react";
import axios from "axios";
import DisplayMovie from "..//DisplayMovie/DisplayMovie";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/dashboard/getpost/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {
        console.log(error);
      }); //gets single post given post_id
  }
  render() {
    console.log(this.state.post);
    return (
      <div className="BlogPage">
        <div className="top">
          <div className="movieContainer">
            <DisplayMovie />
          </div>
          <div>
            <div className="content">
              <h1>Title</h1>
              <p>
                lorla;jsdfjasjfl;jl j dsjfj;agh;fj ladj kl;aj l;jas lfjasdlfj
                asjf a;sljf jslfajs ;lfasjf ;lkasj;lfjsal;fj ;jdfl;ads
                jasd;lfjem
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="comments"></div>
        </div>
      </div>
    );
  }
}
