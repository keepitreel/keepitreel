import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import Community from "../Community/Community";
import Favorites from "../Favorites/Favorites";
import YourBlogs from "../YourBlogs/YourBlogs";
import Unsplash from "react-unsplash-wrapper";
import axios from "axios";
import { connect } from "react-redux";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      tab: "yourBlogs",
      on: "on"
    };
    this.tabChange = this.tabChange.bind(this);
  }

  tabChange(tab) {
    console.log(tab);
    this.setState({ tab, on: "" });
  }

  render() {
    console.log(this.state.tab);
    return (
      <div className="Dashboard-wrapper">
        <div className={"imageBackground"}>
          <Unsplash width="2200" height="1000" collectionId="8598365" />
        </div>
        <div className="Content-wrapper">
          <div className="Profile-wrapper">
            <div className="Button-wrapper">
              <button>Create Blog</button>
            </div>
            <div className="profile">
              <Profile user_id={this.props.user_id} />
            </div>
          </div>
          <div className="Main-wrapper">
            <div className="tabs-container">
              <button
                className="tabBtns"
                onClick={() => this.tabChange("yourBlogs")}
                autoFocus
              >
                Your Blogs
              </button>
              <button
                className="tabBtns"
                onClick={() => this.tabChange("friends")}
              >
                Friends
              </button>
              <button
                className="tabBtns"
                onClick={() => this.tabChange("community")}
              >
                Community
              </button>
              <button
                className="tabBtns"
                onClick={() => this.tabChange("favorites")}
              >
                Favorites
              </button>
            </div>
            <div className="tab-display">
              //map each component into display card comp
              {this.state.tab === "friends" ? (
                <Friends user_id={this.props.user_id} />
              ) : null}
              {this.state.tab === "community" ? <Community /> : null}
              {this.state.tab === "favorites" ? (
                <Favorites user_id={this.props.user_id} />
              ) : null}
              {this.state.tab === "yourBlogs" ? (
                <YourBlogs user_id={this.props.user_id} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    session: reduxState.authReducer,
    user_id: reduxState.authReducer.user_id
  };
};
export default connect(mapStateToProps)(Dashboard);
