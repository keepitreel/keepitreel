import React, { Component } from "react";
import Friend from "./Friend";

import Card from "../Card/Card";
// import { connect } from 'react-redux';

class Friends extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //need backend to send friends data****************
  componentDidMount() {
    // this.props.getFriends();
  }

  render() {
    // let displayFriends = this.props.friends.map(friend => {
    //   return <Friend friend={friend} />;
    // });
    return (
      <>
        <div className="friends-container">
          <h1>Friends</h1>
          {/* <div>{displayFriends}</div> */}
          {/* <Card /> */}
        </div>
      </>
    );
  }
}

export default Friends;
