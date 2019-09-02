let getLikedPost = async (req, res) => {
  // returns all  posts that user_id has liked
  const { user_id } = req.body;
  const db = req.app.get("db");

  const posts = await db
    .get_liked_post(user_id)
    .catch(error => console.log(error));

  res.json(posts);
};

module.exports = {
  getLikedPost
};
