let getGenres = async (req, res) => {
  //returns a list of distinct genres in post currently
  const db = req.app.get("db");

  const genre = await db
    .select_distinct_genre()
    .catch(error => console.log(error));

  res.json(genre);
};

let userPostGenreFilter = async (req, res) => {
  // returns filtered user posts by user_id and genre
  const { user_id, genre } = req.params;
  const db = req.app.get("db");

  const posts = await db
    .get_user_post_genre_filter([user_id, genre])
    .catch(error => console.log(error));

  res.json(posts);
};

let friendGenreFilter = async (req, res) => {
  // returns filtered friends posts by user_id and genre
  const { user_id, genre } = req.params;
  const db = req.app.get("db");

  const posts = await db
    .get_friend_genre_filter([user_id, genre])
    .catch(error => console.log(error));

  res.json(posts);
};

let likedGenreFilter = async (req, res) => {
  // returns filtered liked posts by user_id and genre
  const { user_id, genre } = req.params;
  const db = req.app.get("db");

  const posts = await db
    .get_liked_genre_filter([user_id, genre])
    .catch(error => console.log(error));

  res.json(posts);
};

let communityGenreFilter = async (req, res) => {
  // returns filtered community posts by genre
  const { genre } = req.params;
  const db = req.app.get("db");

  const posts = await db
    .get_community_genre_filter(genre)
    .catch(error => console.log(error));

  res.json(posts);
};

let deletePost = async (req, res) => {
  //deletes post given post_id
  const { post_id } = req.params;
  const db = req.app.get("db");

  await db.delete_post(post_id).catch(error => console.log(error));

  return res.sendStatus(200);
};
let getPost = async (req, res) => {
  //gets single post given post_id
  const { post_id } = req.params;
  const db = req.app.get("db");

  const post = await db.get_post(post_id).catch(error => console.log(error));

  res.json(post);
};
let updatePost = async (req, res) => {
  ///updates post per post_id given
  const {
    post_id,
    user_id,
    text,
    imdbid,
    posterurl,
    rating,
    time,
    genre,
    title,
    blogtitle
  } = req.body;
  const db = req.app.get("db");

  const post = await db
    .update_post([
      post_id,
      user_id,
      text,
      imdbid,
      posterurl,
      rating,
      time,
      genre,
      title,
      blogtitle
    ])
    .catch(error => console.log(error));

  res.json(post);
};

module.exports = {
  getGenres,
  userPostGenreFilter,
  friendGenreFilter,
  likedGenreFilter,
  communityGenreFilter,
  deletePost,
  getPost,
  updatePost
};
