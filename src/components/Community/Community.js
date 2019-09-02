import React, { Component } from "react";
import axios from "axios";
// import { connect } from 'react-redux';
// import { getBlogs } from 'reducer';

class Community extends Component {
  constructor() {
    super();
    this.state = {
      blog: []
    };
  }

  //need backend to send blogs id based on most recent****************
  componentDidMount() {
    // axios
    //   .get(`/api/blog/${this.props.match.params.id}`)
    //   .then(res => {
    //     this.setState({ blog: res.data });
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    // const { username } = this.props.session;
    // const { blog } = this.state;
    // const { id } = this.props.match.params;

    // let displayBlogs = blog.map(card => {
    //   return <this will be the component where card is built and props is passed/>;
    // });

    return (
      <>
        <div className="community-container">
          <h1>Community</h1>
          {/* <div>{displayFriends}</div> */}
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    community: reduxState.community
  };
};

// export default connect(mapStatetoProps, {getBlogs})(Community)

export default Community;
