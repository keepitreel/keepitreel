import React from "react";
import { Link } from "react-router-dom";

function Friend(props) {
  const { friend } = props;
  return (
    <>
      <h1>{friend.name}</h1>
      <Link>
        <img src={friend.avatar_imageUrl} alt={friend.name} />
      </Link>
    </>
  );
}

export default Friend;
