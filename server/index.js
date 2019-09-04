//Open index.js and require your packages and the controller file.
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {
  loginControl,
  register,
  updateUser,
  updatePassword,
  logout
} = require("./LoginController");
const {
  follow,
  unFollow,
  userFollow,
  userFollowCount,
  getSession
} = require("./viewCardController");
const { getUserPost } = require("./yourBlogsController");
const { getCommunityPost } = require("./communityController");
const { getLikedPost } = require("./favoriteController");
const { getFriendsPost } = require("./friendsController");
const { createPost } = require("./createBlogController");
const { createComment, getComments } = require("./commentContoller");
const {
  getGenres,
  userPostGenreFilter,
  friendGenreFilter,
  likedGenreFilter,
  communityGenreFilter,
  deletePost,
  getPost
} = require("./dashboardController");

require("dotenv").config(); //get access to environmental variables

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

//const path = require("path");

const app = express();
//app.use(express.static(`${__dirname}/../build`));
app.use(express.json()); //gives us access to req.body

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
);
massive(CONNECTION_STRING)
  .then(dbinstance => {
    app.set("db", dbinstance);
    console.log("database connected :)");
  })
  .catch(e => console.log(e));

// Authentication loginController.js
app.post("/api/login", loginControl);
app.post("/api/login/register", register);
app.put("/api/login/update/user", updateUser); //updates all basic user info except password
app.put("/api/login/update/password", updatePassword); //updates and hashes new password
app.post("/api/login/logout", logout); //calls destroy session
app.get("/api/login/sessionuser", getSession); // checks if user is on session and returns req.session.user else 403

//viewCardController.js
app.post("/api/viewcard/follow", follow);
app.put("/api/viewcard/unfollow", unFollow); //deletes follow given user_id AND following_user_id
app.get("/api/viewcard/userfollow", userFollow); // returns all people user_id is following
app.get("/api/viewcard/followcount", userFollowCount); // returns count of all people who follow user_id

//yourBlogsController.js   returns all user_id post
app.get("/api/userpost/:user_id", getUserPost);

//communityController.js   returns all  post desc by time sec from
app.get("/api/communitypost", getCommunityPost);

//favoriteController.js    returns all  posts that user_id has liked
app.get("/api/favoritepost", getLikedPost);

//friendsController.js    returns all  posts from friends, or followers of user_id
app.get("/api/friendspost", getFriendsPost);

//createBlogController.js create post
app.post("/api/blog/createpost", createPost);

//commentController.js
app.post("/api/comment/createcomment", createComment); //creates comment
app.get("/api/comment/:post_id", getComments); //get all comments for post_id //written with req.params //postman call http://localhost:4050/api/comment/1
//
//app.get("/api/comment", getComments); //get all comments for post_id using req.query  //postman call http://localhost:4050/api/comment/?post_id=1

//dashboardController.js
app.get("/api/dashboard/usergenrefilter", userPostGenreFilter); // returns filtered user posts by user_id and genre
app.get("/api/dashboard/getgenres", getGenres); //returns a list of distinct genres in post currently
app.get("/api/dashboard/likedgenrefilter", likedGenreFilter); // returns filtered liked posts by user_id and genre
app.get("/api/dashboard/communitygenrefilter", communityGenreFilter); // returns filtered community posts by genre
app.get("/api/dashboard/friendgenrefilter", friendGenreFilter); // returns filtered friends posts by user_id and genre
app.put("/api/dashboard/deletepost", deletePost); //deletes post given post_id
app.get("/api/dashboard/getpost/:post_id", getPost); //gets single post given post_id

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(SERVER_PORT, () => console.log("listening on port " + SERVER_PORT)); //runs server
