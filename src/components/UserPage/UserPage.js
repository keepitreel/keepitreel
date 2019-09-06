import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Follow from "../Follow/Follow";

export default class UserPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Profile />
          <Follow following_user_id={this.props.match.params.id} />
        </div>
        <div></div>
      </div>
    );
  }
}
