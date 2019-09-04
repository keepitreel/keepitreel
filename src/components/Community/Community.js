import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { connect } from "react-redux";

class Community extends Component {
  constructor() {
    super();
    this.state = {
      community: []
    };
  }

  //need backend to send blogs id based on most recent****************
  //get time for blogs
  componentDidMount() {
    axios.get("/api/communitypost").then(res => {
      {
        console.log(res.data);
      }
      this.setState({ community: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="friends-container">
          <h1>Community</h1>
          <div>
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
