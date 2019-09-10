import React, { Component } from "react";
import { connect } from "react-redux";
import "./Follow.scss";
import axios from "axios";

class Follow extends Component {
  constructor() {
    super();
    this.state = {
      follow: false
    };
  }
  follow = () => {
    console.log(this.state.follow);
    let { user_id, following_user_id } = this.props;
    axios
      .post("/api/viewcard/follow", { user_id, following_user_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({ follow: !this.state.follow });
  };

  unfollow = () => {
    console.log(this.state.follow);
    let { user_id, following_user_id } = this.props;
    axios
      .put("/api/viewcard/unfollow", { user_id, following_user_id })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.setState({ follow: !this.state.follow });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.ImdbID) {}
  // }
  componentDidMount() {
    let { user_id, following_user_id } = this.props;
    console.log(user_id)
    axios
      .put("/api/viewcard/followed", { user_id, following_user_id })
      .then(res => {
        this.setState({ follow: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
        let { user_id, following_user_id } = this.props;

    prevProps.user_id !== user_id &&
      axios
      .put("/api/viewcard/followed", { user_id, following_user_id })
      .then(res => {
        this.setState({ follow: res.data });
      })
      .catch(error => {
        console.log(error);
      });

    
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    let { user_id, following_user_id } = this.props;
    return (
      <div className="FollowComponent">
        {this.state.follow ? (
          <div className="tooltip">
            <i class="fas fa-user-plus unfollow" onClick={this.unfollow}></i>
            <span class="tooltiptext">Unfollow user</span>
          </div>
        ) : (
          <div className="tooltip">
            <i class="fas fa-user-plus follow" onClick={this.follow}></i>
            <span class="tooltiptext">Follow User</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id,
    username: reduxState.authReducer.username
  };
};

export default connect(mapStateToProps)(Follow);
