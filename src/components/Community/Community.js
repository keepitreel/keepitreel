import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { connect } from "react-redux";
import "./Community.scss";
//import "../../App.scss";

class Community extends Component {
  constructor() {
    super();
    this.state = {
      community: []
    };
  }

  componentDidMount() {
    axios.get("/api/communitypost").then(res => {
      this.setState({ community: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="main-wrapper">
          <div className="tabTitle">
            <h4>Community</h4>
          </div>
          <div className="card">
            {this.state.community.map(commCard => (
              <Card
                name={commCard.name}
                post_id={commCard.post_id}
                key={commCard.post_id}
                user_id={commCard.user_id}
                text={commCard.text}
                posterurl={commCard.posterurl}
                title={commCard.title}
                blogtitle={commCard.blogtitle}
                avatarurl={commCard.avatarurl}
                rating={commCard.rating}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(mapStatetoProps)(Community);
