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
  userFollowCount
} = require("./viewCardController");
const { getUserPost } = require("./yourBlogsController");
const { getCommunityPost } = require("./communityController");
const { getLikedPost } = require("./favoriteController");
const { getFriendsPost } = require("./friendsController");

require("dotenv").config(); //get access to environmental variables

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

const path = require("path");

const app = express();
app.use(express.static(`${__dirname}/../build`));

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

app.use(express.json()); //gives us access to req.body

// Authentication loginController.js
app.post("/api/login", loginControl);
app.post("/api/login/register", register);
app.put("/api/login/update/user", updateUser); //updates all basic user info except password
app.put("/api/login/update/password", updatePassword); //updates and hashes new password
app.post("/api/login/logout", logout); //calls destroy session

//viewCardController.js
app.post("/api/viewcard/follow", follow);
app.put("/api/viewcard/unfollow", unFollow);
app.get("/api/viewcard/userfollow", userFollow); // returns all people user_id is following
app.get("/api/viewcard/followcount", userFollowCount); // returns count of all people who follow user_id

//yourBlogsController.js   returns all user_id post
app.get("api/userpost", getUserPost);

//communityController.js   returns all  post desc by time sec from
app.get("api/communitypost", getCommunityPost);

//favoriteController.js    returns all  posts that user_id has liked
app.get("api/favoritepost", getLikedPost);

//friendsController.js    returns all  posts from friends, or followers of user_id
app.get("api/friendspost", getFriendsPost);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () => console.log("listening on port " + SERVER_PORT)); //runs server
