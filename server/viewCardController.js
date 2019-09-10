let follow = async (req, res) => {
  const { user_id, following_user_id } = req.body;
  const db = req.app.get("db");

  if (user_id == following_user_id) {
    //cannot follow self
    return res.sendStatus(200);
  } else {
    await db
      .start_following([user_id, following_user_id])
      .catch(error => console.log(error));
    return res.sendStatus(200);
    //res.status(200).json(user) example of return status with promise
  }
};
let unFollow = async (req, res) => {
  const { user_id, following_user_id } = req.body;
  const db = req.app.get("db");

  await db
    .stop_following([user_id, following_user_id])
    .catch(error => console.log(error));
  return res.sendStatus(200);
};
let userFollow = async (req, res) => {
  // returns all people user_id is following
  const { user_id } = req.params;
  const db = req.app.get("db");

  const user = await db
    .select_user_following(user_id)
    .catch(error => console.log(error));

  res.json(user);
};
let userFollowCount = async (req, res) => {
  // returns count of all people who follow user_id
  const { user_id } = req.params;
  const db = req.app.get("db");

  const user = await db
    .select_user_follow_count(user_id)
    .catch(error => console.log(error));

  res.json(user);
};
let startLikingPost = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  await db
    .start_liking_post([user_id, post_id])
    .catch(error => console.log(error));
  return res.sendStatus(200);
};
let stopLikingPost = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  await db
    .stop_liking_post([user_id, post_id])
    .catch(error => console.log(error));
  return res.sendStatus(200);
};
let startDislikingPost = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  await db
    .start_disliking_post([user_id, post_id])
    .catch(error => console.log(error));
  return res.sendStatus(200);
};
let stopDislikingPost = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  await db
    .stop_disliking_post([user_id, post_id])
    .catch(error => console.log(error));
  return res.sendStatus(200);
};
let checkIfFollowed = async (req, res) => {
  const { user_id, following_user_id } = req.body;
  const db = req.app.get("db");

  const user = await db
    .check_followed([user_id, following_user_id])
    .catch(error => console.log(error));

  if (user[0]) {
    return res.status(200).json(true);
  } else {
    return res.status(200).json(false);
  }
};
let checkIfLiked = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  const user = await db
    .check_liked([user_id, post_id])
    .catch(error => console.log(error));

  if (user[0]) {
    return res.status(200).json(true);
  } else {
    return res.status(200).json(false);
  }
};
let checkIfDisliked = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  const user = await db
    .check_disliked([user_id, post_id])
    .catch(error => console.log(error));
  if (user[0]) {
    return res.status(200).json(true);
  } else {
    return res.status(200).json(false);
  }
};
let thumbsUP = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  const likeduser = await db
    .check_liked([user_id, post_id])
    .catch(error => console.log(error));
  if (likeduser[0]) {
    //if liked user exists then previously liked and delete
    await db //and delete from like table
      .stop_liking_post([user_id, post_id])
      .catch(error => console.log(error));

    res.sendStatus(200); //return success
  } else {
    await db
      .start_liking_post([user_id, post_id]) //else add like to table
      .catch(error => console.log(error));

    await db //and delete from dislike table
      .stop_disliking_post([user_id, post_id])
      .catch(error => console.log(error));
    return res.sendStatus(200);
  }
};
let thumbsDOWN = async (req, res) => {
  const { user_id, post_id } = req.body;
  const db = req.app.get("db");

  const hateduser = await db
    .check_disliked([user_id, post_id])
    .catch(error => console.log(error));
  if (hateduser[0]) {
    await db //and delete from dislike table
      .stop_disliking_post([user_id, post_id])
      .catch(error => console.log(error));
    res.sendStatus(200); //if userpost is already disliked, exists ,delete disliked   //return success
  } else {
    await db
      .start_disliking_post([user_id, post_id]) //else add dislike to table
      .catch(error => console.log(error));

    await db //and delete from like table
      .stop_liking_post([user_id, post_id])
      .catch(error => console.log(error));
    return res.sendStatus(200);
  }
};
let getFollow = async (req, res) => {
  // returns all people user_id is following but just following_user_id
  const { user_id } = req.params;
  const db = req.app.get("db");

  const user = await db
    .get_followers(user_id)
    .catch(error => console.log(error));

  res.json(user);
};
let getNumPostLikes = async (req, res) => {
  //get number of likes a post has
  const { post_id } = req.params;
  const db = req.app.get("db");

  const post = await db
    .get_num_post_likes(post_id)
    .catch(error => console.log(error));

  res.json(post);
};
let getNumPostDislikes = async (req, res) => {
  //get number of Dislikes a post has
  const { post_id } = req.params;
  const db = req.app.get("db");

  const post = await db
    .get_num_post_dislikes(post_id)
    .catch(error => console.log(error));

  res.json(post);
};

module.exports = {
  follow,
  unFollow,
  userFollow,
  userFollowCount,
  startLikingPost,
  stopLikingPost,
  startDislikingPost,
  stopDislikingPost,
  checkIfFollowed,
  checkIfLiked,
  checkIfDisliked,
  thumbsUP,
  thumbsDOWN,
  getFollow,
  getNumPostLikes,
  getNumPostDislikes
};
