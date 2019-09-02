let createPost = async (req, res) => {
  //creates post
  const { user_id, text, imdbid, posterurl, rating, time, genre } = req.body;
  const db = req.app.get("db");

  const newPost = await db
    .create_post([user_id, text, imdbid, posterurl, rating, time, genre])
    .catch(error => console.log(error));

  res.json(newPost);
};

module.exports = {
  createPost
};
