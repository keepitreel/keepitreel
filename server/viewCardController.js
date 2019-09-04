let follow = async (req, res) => {
  const { user_id, following_user_id } = req.body;
  const db = req.app.get("db");

  await db
    .start_following([user_id, following_user_id])
    .catch(error => console.log(error));
  return res.sendStatus(200);
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

module.exports = {
  follow,
  unFollow,
  userFollow,
  userFollowCount,
  startLikingPost,
  stopLikingPost,
  startDislikingPost,
  stopDislikingPost
};
