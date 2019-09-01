import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import Community from "../Community/Community";
import Favorites from "../Favorites/Favorites";
import YourBlogs from "../YourBlogs/YourBlogs";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "friends"
    };
    this.tabChange = this.tabChange.bind(this);
  }

  tabChange(tab) {
    console.log(tab);
    this.setState({ tab });
  }

  render() {
    console.log(this.state.tab);
    return (
      <div className="dashboard-container">
        <div className="grid-wrapper">
          <div className="tabs-container box-2">
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
            <button
              className="tabBtns"
              onClick={() => this.tabChange("yourBlogs")}
            >
              Your Blogs
            </button>
          </div>
          <div className="profile-container box-1">
            <Profile />
          </div>
          <div className="tab-display box-3">
            {this.state.tab === "friends" ? <Friends /> : null}
            {this.state.tab === "community" ? <Community /> : null}
            {this.state.tab === "favorites" ? <Favorites /> : null}
            {this.state.tab === "yourBlogs" ? <YourBlogs /> : null}
          </div>
          <div className="button-container box-4" id="4">
            <button>Create Blog</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
