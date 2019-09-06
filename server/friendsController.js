let getFriendsPost = async (req, res) => {
  // returns all  posts from friends, or followers of user_id
  const { user_id } = req.params;
  const db = req.app.get("db");

  const posts = await db
    .get_friends_post(user_id)
    .catch(error => console.log(error));

  res.json(posts);
};
let getFriendsRecentPost = async (req, res) => {
  // returns all  posts from friends, or followers of user_id MOST RECENT
  // console.log("req.session inside is");
  // console.log(req.session);
  const { user_id } = req.session.user;
  //const { user_id } = req.params;
  const db = req.app.get("db");

  const posts = await db
    .get_friends_most_recent_post(user_id)
    .catch(error => console.log(error));

  res.json(posts);
};
module.exports = {
  getFriendsPost,
  getFriendsRecentPost
};
