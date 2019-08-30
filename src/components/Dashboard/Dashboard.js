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
    console.log(tab);
    this.setState({ tab });
  }

  //nested ternary

  render() {
    console.log(this.state.tab);
    return (
      <div>
        <div className="tabs">
          <button className="tabBtns" onClick={() => this.tabChange("friends")}>
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
            onClick={() => this.tabChange("favoriteTabs")}
          >
            Favorite Tabs
          </button>
          <button
            className="tabBtns"
            onClick={() => this.tabChange("yourTabs")}
          >
            Your Tabs
          </button>
        </div>
        {this.state.tab === "friends" ? <p>Friends Component</p> : null}
        {this.state.tab === "community" ? <p>community Component</p> : null}
        {this.state.tab === "favoriteTabs" ? (
          <p>favoriteTabs Component</p>
        ) : null}
        {this.state.tab === "yourTabs" ? <p>yourTabs Component</p> : null}
      </div>
    );
  }
}

export default Dashboard;
