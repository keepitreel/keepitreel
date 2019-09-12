import React, { Component } from "react";
import axios from "axios";
import Follow from "../Follow/Follow.js";
import "./Profile.scss";

import Flippy, { FrontSide, BackSide } from "react-flippy";
import { connect } from "react-redux";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      avatarurl: "",
      showEdit: false,
      nameUpdate: "",
      usernameUpdate: "",
      emailUpdate: "",
      avatarurlUpdate: ""
    };
  }

  componentDidMount() {
    axios
      .get(`/api/login/data/user/${this.props.user_id}`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          name: res.data[0].name,
          username: res.data[0].username,
          email: res.data[0].email,
          avatarurl: res.data[0].avatarurl,
          user_id: res.data[0].user_id
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEdit = e => {
    this.setState({
      showEdit: !this.state.showEdit
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      nameUpdate,
      usernameUpdate,
      emailUpdate,
      avatarurlUpdate
    } = this.state;
    let user_id = this.props.user_id;
    let username = usernameUpdate;
    let name = nameUpdate;
    let email = emailUpdate;
    let avatarurl = avatarurlUpdate;
    console.log(user_id, username, name, email, avatarurl);
    axios
      .put("/api/login/update/user", {
        user_id,
        username,
        name,
        email,
        avatarurl
      })
      .then(res => {
        console.log(res.data);
        this.componentDidMount();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);

    return (
      <div className="main-wrapper">
        <Flippy
          ref={r => (this.flippyHorizontal = r)}
          flipOnClick={false}
          style={{ width: "100%", height: "100%" }}
        >
          <FrontSide style={{ width: "100%", height: "100%" }}>
            <div className="profile-info">
              <h4>Welcome {this.state.name}</h4>
              <img
                src="https://scontent-dfw5-1.xx.fbcdn.net/v/l/t1.0-9/1461299_1435857813311687_1043945670_n.jpg?_nc_cat=101&_nc_oc=AQnG40wLc9Fc-OrWBcVDl62u2JMMMIu3J4xGQfDF50LtGuKCEZJfziLrC82pf_ZeT9s&_nc_ht=scontent-dfw5-1.xx&oh=0ebff747f07f68ebf25a9aaad5e49da1&oe=5DF3D5B9"
                alt="Alex"
              />
              <p>{this.state.username}</p>
              <p>{this.state.email}</p>
              {this.props.redux_user_id == this.state.user_id && (
                <button
                  type="button"
                  onClick={() => this.flippyHorizontal.toggle()}
                >
                  Edit
                </button>
              )}
            </div>
          </FrontSide>
          <BackSide style={{ width: "100%", height: "100%" }}>
            <div className="editForm">
              <form>
                <h5 className="header">Edit Profile</h5>
                <input
                  name="usernameUpdate"
                  placeholder="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                <input
                  name="nameUpdate"
                  placeholder="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <input
                  name="passwordUpdate"
                  type="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <input
                  name="emailUpdate"
                  placeholder="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <div className="button-container">
                  <button onClick={this.handleSubmit}>Update</button>
                  <button
                    type="button"
                    onClick={() => this.flippyHorizontal.toggle()}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    session: reduxState.authReducer,
    redux_user_id: reduxState.authReducer.user_id
  };
};
export default connect(mapStateToProps)(Profile);
