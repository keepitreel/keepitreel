import React, { Component } from "react";
import axios from "axios";

export default class FollowNumber extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }

  componentDidMount() {
    axios
      .get(`/api/viewcard/followcount/${this.props.id}`)
      .then(res => {
        this.setState({
          num: res.data[0].count
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    console.log("hit");
    let { id } = this.props;
    prevProps.id !== id &&
      axios
        .get(`/api/viewcard/followcount/${id}`)
        .then(res => {
          this.setState({
            num: res.data[0].count
          });
        })
        .catch(error => {
          console.log(error);
        });
  }

  render() {
    return <div>{this.state.num}</div>;
  }
}
