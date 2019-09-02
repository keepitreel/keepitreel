let getCommunityPost = async (req, res) => {
  // returns all  post desc by time sec from
  const db = req.app.get("db");

  const posts = await db
    .get_community_post()
    .catch(error => console.log(error));

  res.json(posts);
};

module.exports = {
  getCommunityPost
};
