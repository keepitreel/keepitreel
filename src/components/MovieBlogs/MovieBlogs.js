import React, { Component } from "react";
import DisplayTickets from "../DisplayTickets/DisplayTickets";
import Card from "../Card/Card";
import axios from "axios";

export default class MovieBlogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/dashboard/imdbid/${this.props.ImdbID}`)
      .then(res => {
        this.setState({ blogs: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let cards = this.state.blogs.map(blog => (
      <Card
        name={blog.name}
        post_id={blog.post_id}
        key={blog.post_id}
        user_id={blog.user_id}
        text={blog.text}
        posterurl={blog.posterurl}
        title={blog.title}
        blogtitle={blog.blogtitle}
        avatarurl={blog.avatarurl}
        rating={blog.rating}
      />
    ));
    return (
      <div className="mappedCard">
        <DisplayTickets displayName={"Community"} tickets={cards} />
      </div>
    );
  }
}
