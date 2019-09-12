import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Follow from "../Follow/Follow";
import YourBlogs from "../YourBlogs/YourBlogs";
import Unsplash from "react-unsplash-wrapper/dist/components/Unsplash";
import FollowNumber from "../FollowNumber/FollowNumber";

import "./UserPage.scss";

export default class UserPage extends Component {
  render() {
    return (
      <div className={"UserPageDiv"}>
        <div className={"imageBackground"}>
          <Unsplash width="2000" height="1000" collectionId="8598365" />
        </div>
        <div className="contentDiv">
          <div className={"profileDiv"}>
            <div className="pro">
              <Profile user_id={this.props.match.params.id} />
              <div className="followDiv">
                <Follow following_user_id={this.props.match.params.id} />
              </div>
            </div>
          </div>
          <div className="yourblog">
            <YourBlogs user_id={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );
  }
}
