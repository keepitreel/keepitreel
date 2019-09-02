import React, { Component } from "react";
import Friend from "./Friend";
// import { connect } from 'react-redux';
// import { getFriends } from 'reducer';

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
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    friends: reduxState.friends.friends
  };
};

// export default connect(
//   mapStatetoProps,
//   { getFriends }
// )(Friends);

export default Friends;
