let createComment = async (req, res) => {
  //creates comment
  const { post_id, user_id, text, title } = req.body;
  const db = req.app.get("db");

  const newComment = await db
    .create_comment([post_id, user_id, text, title])
    .catch(error => console.log(error));

  res.json(newComment); //not returning newComment was an extra semi colon before returning NOTE:
};
let getComments = async (req, res) => {
  //written with req.params  //postman call http://localhost:4050/api/comment/1
  //get all comments for post_id
  const { post_id } = req.params;
  const db = req.app.get("db");

  const comments = await db
    .get_comments_on_post(post_id)
    .catch(error => console.log(error));

  res.json(comments);
};
// FOR FUTURE REFERENCE  //
// let getComments = async (req, res) => {    //written with req.query //postman call http://localhost:4050/api/comment/?post_id=1
//   //get all comments for post_id
//   const { post_id } = req.query;
//   const db = req.app.get("db");

//   const comments = await db
//     .get_comments_on_post(post_id)
//     .catch(error => console.log(error));

//   res.json(comments);
// };

module.exports = {
  createComment,
  getComments
};
