import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser } from "../../redux/authReducer";
import "./Profile.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user_id: "",
      name: "",
      email: "",
      avatarurl: ""
    };
  }

  //Once user logs in or registers they are sent to dashboard, the profile container will display relevant user data provided by backend
  componentDidMount() {}

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

const mapStateToProps = reduxState => {
  return {
    session: reduxState.authReducer
  };
};
export default connect(
  mapStateToProps,
  { updateUser }
)(Profile);
