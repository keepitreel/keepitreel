import React, { Component } from "react";
import Profile from "../Profile/Profile";
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
    this.setState({ tab });
  }

  renderTab() {
    switch (
      this.state.tab
      // case "friends":
      //   return <Friends />;
      // case "community":
      //   return <Community />;
      // case "favoriteBlogs":
      //   return <FavoriteBlogs />;
      // case "yourBlogs":
      //   return <YourBlogs />;
    ) {
    }
  }

  render() {
    return (
      <div className="dashboard-app">
        <div className="dashboard-container">
          <div className="profile-container">
            <Profile />
          </div>
          <div className="dashboard-tabs">
            <button className="btn" onClick="friends">
              Friends
            </button>
          </div>
        </div>
        <div className="create-blog-button">
          <button>Create Blog</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
