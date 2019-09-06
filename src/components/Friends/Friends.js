import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./Friends.scss";
import { checkForLogin } from "../../redux/authReducer";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  // componentDidMount() {
  //   axios.get("/api/login/sessionuser").then(res => {
  //     //this fixes the
  //     if (res.data.user_id) {
  //       this.props.checkForLogin(res.data);
  //       axios
  //         .get(`/api/friendspost/recent/${this.props.user_id}`)
  //         .then(res => {
  //           console.log(res);
  //           this.setState({
  //             friends: res.data
  //           });
  //         })
  //         .catch(error => console.log(error));
  //     }
  //   });
  //   console.log("friends didmount and this.props.user_id is");
  //   console.log(this.props.user_id);
  // }

  //or
  componentDidMount() {
    axios
      .get(`/api/friendspost/recent`)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        {!this.props.user_id && <Redirect to="/" />}
        <div className="friends-wrapper">
          <h3>Friends</h3>
          <div className="card">
            {this.state.friends.map(friend => (
              <Link to={`/blog/${friend.post_id}`}>
                <Card
                  className="card"
                  name={friend.name}
                  post_id={friend.post_id}
                  key={friend.post_id}
                  user_id={friend.user_id}
                  text={friend.text}
                  posterurl={friend.posterurl}
                  title={friend.title}
                  blogtitle={friend.blogtitle}
                  avatarurl={friend.avatarurl}
                  rating={friend.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

let mapStateToProps = reduxState => {
  return {
    username: reduxState.authReducer.username,
    password: reduxState.authReducer.password,
    user_id: reduxState.authReducer.user_id,
    name: reduxState.authReducer.name,
    email: reduxState.authReducer.email
  };
};

export default connect(
  mapStateToProps,
  { checkForLogin }
)(Friends);
