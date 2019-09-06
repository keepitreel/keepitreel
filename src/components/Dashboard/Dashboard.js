import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import Community from "../Community/Community";
import Favorites from "../Favorites/Favorites";
import YourBlogs from "../YourBlogs/YourBlogs";
import axios from "axios";
import { connect } from "react-redux";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "yourBlogs"
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
      <div className="Dashboard-wrapper">
        <div className="Content-wrapper">
          <div className="Profile-container">
            <div className="button-container">
              <button>Create Blog</button>
            </div>
            <Profile user_id={this.props.user_id} />
          </div>
          <div className="Master-container">
            <div className="tabs-container">
              <button
                className="tabBtns"
                onClick={() => this.tabChange("yourBlogs")}
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
              {this.state.tab === "friends" ? (
                <Friends user_id={this.props.user_id} />
              ) : null}
              {this.state.tab === "community" ? <Community /> : null}
              {this.state.tab === "favorites" ? <Favorites /> : null}
              {this.state.tab === "yourBlogs" ? <YourBlogs /> : null}
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
