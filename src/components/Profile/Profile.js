import React, { Component } from "react";
import axios from "axios";
import "./Profile.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    axios.get().then(results => {
      this.setState({
        profiles: results.data
      });
    });
  }

  render() {
    return (
      <div className="profile">
        <h2>Welcome Tommy</h2>
        <img
          // profileImage: `url(${profile-image})`
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYl2tzcj9JJH4GwR2KU1Y5r15kp1e8Tumw9e81XBnupbru1UA"
          alt="tommy"
        />
        <span>Tommy</span>
        <span>Tommy@callahans.com</span>
        <button>Edit</button>
      </div>
    );
  }
}

export default Profile;