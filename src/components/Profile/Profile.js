import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser } from "../../redux/authReducer";
import "./Profile.scss";

//get rid of redux

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
  componentDidMount() {
    // axios to backend, this.props.user_id , app.get("/api/userpost/:user_id", getUserPost);

    axios.get(`/api/userpost/${this.props.user_id}`).then(res => {
      this.setState({
        user_id: res.data
      });
    });
  }

  editForm = e => {
    e.preventDefault();

    axios
      .put("/api/login/update/user", this.state)
      .then(res => {
        this.props.updateUser(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    this.setState({});
  };

  render() {
    return (
      <div className="editForm">
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
        <form onSubmit>
          <h2 className="header">Edit Profile</h2>
          <input
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input name="name" placeholder="name" onChange={this.handleChange} />
          <input
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <input
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit} type="submit">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;
