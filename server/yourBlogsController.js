let getUserPost = async (req, res) => {
  // returns all user_id post
  const { user_id } = req.body;
  const db = req.app.get("db");

  const user = await db
    .get_user_post(user_id)
    .catch(error => console.log(error));

  res.json(user);
};

module.exports = {
  getUserPost
};
