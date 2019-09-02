import React, { Component } from "react";
import axios from "axios";
// import { connect } from 'react-redux';
// import { getBlogs } from 'reducer';

class Community extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }

  //need backend to send blogs id based on most recent****************
  //get time for blogs
  componentDidMount() {
    axios
      .get("/api/communitypost")
      .then(res => {
        {
          console.log(res.data);
        }
        this.setState({ post: res.data });
      })
      .catch(error => console.log(error));
    console.log(this.post);
  }

  render() {
    return (
      <>
        {console.log(this.state.post)}
        {this.state.post.map(card => (
          <div key={card.post_id}>
            <h1>{card.user_id}</h1>

            <img src={card.posterurl} />
          </div>
        ))}
      </>
    );
  }
}

// let mapStatetoProps = reduxState => {
//   return {
//     community: reduxState.community
//   };
// };

// export default connect(mapStatetoProps, {getBlogs})(Community)

export default Community;
