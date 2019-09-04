import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`/api/friendspost/${this.props.user_id}`).then(res => {
      console.log(this.props.user_id);
      console.log(res.data);
      this.setState({
        friends: res.data
      });
      console.log(this.state);
    });
  }

  render() {
    console.log(this.state.friends);
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

let mapStatetoProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(mapStatetoProps)(Friends);

// export default Friends;
