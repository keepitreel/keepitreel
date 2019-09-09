import React, { Component } from "react";
import axios from "axios";
import "./Profile.scss";

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
      // user: []
    };
  }

  componentDidMount() {
    axios.get(`/api/login/data/user/${this.props.user_id}`).then(res => {
      console.log(res.data[0]);
      this.setState({
        name: res.data[0].name,
        username: res.data[0].username,
        email: res.data[0].email,
        avatarurl: res.data[0].avatarurl,
        showEdit: false
        // user: res.data
      });
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
        // this.setState({
        //   name: res.data.name,
        //   username: res.data.username,
        //   email: res.data.email,
        //   avatarurl: res.data.avatarurl,
        //   showEdit: false
        // });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.user);

    return (
      <div className="main-wrapper">
        <div className="profile">
          <h4>Welcome {this.state.name}</h4>
          <img
            // profileImage: `url(${this.state.user.avatarurl})`
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjKzdLZoS1L8JcE5MovJ7_AzHxbWaqY2okboaJV5hyummhVT4"
            alt="commando"
          />
          <span>{this.state.username}</span>
          <span>{this.state.email}</span>
        </div>
        <button onClick={this.handleEdit}>Edit</button>
        {this.state.showEdit && (
          <div className="editForm">
            <form>
              <h5 className="header">Edit Profile</h5>
              <input
                name="usernameUpdate"
                placeholder="username"
                onChange={this.handleChange}
              />
              <input
                name="nameUpdate"
                placeholder="name"
                onChange={this.handleChange}
              />
              <input
                name="passwordUpdate"
                placeholder="password"
                onChange={this.handleChange}
              />
              <input
                name="emailUpdate"
                placeholder="email"
                onChange={this.handleChange}
              />
              <input
                name="avatarurlUpdate"
                placeholder="avatarurl"
                onChange={this.handleChange}
              />
              <button onClick={this.handleSubmit}>Update</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
