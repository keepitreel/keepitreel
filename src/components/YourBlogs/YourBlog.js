import React from "react";
import { Link } from "react-router-dom";

function YourBlog(props) {
  const { blog } = props;
  return (
    <>
      <h1>{blog.name}</h1>
      <Link>
        <img src={blog.poster_imageUrl} alt={blog.name} />
      </Link>
    </>
  );
}

export default YourBlog;
