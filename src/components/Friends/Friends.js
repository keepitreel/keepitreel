import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import axios from "axios";
import "./Friends.scss";
import "../../App.scss";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`/api/friendspost/${this.props.user_id}`).then(res => {
      this.setState({
        friends: res.data
      });
    });
  }

  render() {
    return (
      <>
        {/* <div className="tabDisplay"> */}
        <div className="main-wrapper">
          <div className="tabTitle">
            <h4>Friends</h4>
          </div>
          <div classname="card">
            {this.state.friends.map(friend => (
              <Card
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
            ))}
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(mapStatetoProps)(Friends);
