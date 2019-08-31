let follow = async (req, res) => {
  const { user_id, following_user_id } = req.body;
  const db = req.app.get("db");

  await db.start_following([user_id, following_user_id]);
};

let unFollow = async (req, res) => {
  const { user_id, following_user_id } = req.body;
  const db = req.app.get("db");

  await db.stop_following([user_id, following_user_id]);
};

let userFollow = async (req, res) => {
  // returns all people user_id is following
  const { user_id } = req.body;
  const db = req.app.get("db");

  const user = await db
    .select_user_following(user_id)
    .catch(error => console.log(error));

  res.json(user);
};

let userFollowCount = async (req, res) => {
  // returns count of all people who follow user_id
  const { user_id } = req.body;
  const db = req.app.get("db");

  const user = await db
    .select_user_follow_count(user_id)
    .catch(error => console.log(error));

  res.json(user);
};

module.exports = {
  follow,
  unFollow,
  userFollow,
  userFollowCount
};
