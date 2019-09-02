let createComment = async (req, res) => {
  //creates comment
  const { post_id, user_id, text } = req.body;
  const db = req.app.get("db");

  const newComment = await db
    .create_comment([post_id, user_id, text])
    .catch(error => console.log(error));

  console.log(newComment);

  res.json(newComment); //not returning newComment
};
let getComments = async (req, res) => {
  //get all comments for post_id
  console.log(req.params);
  const { post_id } = req.params;
  const db = req.app.get("db");

  const comments = await db
    .get_comments_on_post(post_id)
    .catch(error => console.log(error));

  console.log(comments);

  res.json(comments);
};

module.exports = {
  createComment,
  getComments
};
