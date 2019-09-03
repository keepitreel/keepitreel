const bcrypt = require("bcryptjs");

let loginControl = async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const user = await db.check_user(username).catch(error => console.log(error));

  if (!user[0]) {
    res.status(401).json("Incorrect username or password");
  } else {
    const isAuthorized = await bcrypt
      .compare(password, user[0].password)
      .catch(error => console.log(error));

    if (!isAuthorized) {
      res.status(401).json("Incorrect username or password");
    } else {
      //console.log(user[0]);

      req.session.user = {
        user_id: user[0].user_id,
        username: user[0].username,
        name: user[0].name,
        email: user[0].email,
        avatarurl: user[0].avatarurl
      };
      res.json(req.session.user);
    }
  }
};

let register = async (req, res) => {
  const { username, name, password, email } = req.body;
  const db = req.app.get("db");

  const user = await db.check_user(username).catch(error => console.log(error));
  if (user[0]) {
    res.status(401).json("Username is already taken");
  } else {
    const hash = await bcrypt
      .hash(password, 10)
      .catch(error => console.log(error));

    const newUser = await db.create_user([
      username,
      name,
      hash, // hashed pasword into sql database
      email
    ]);

    req.session.user = {
      user_id: newUser[0].user_id,
      username,
      name,
      email
    };
    res.json(req.session.user);
  }
};

let updateUser = async (req, res) => {
  const { user_id, username, name, email, avatarurl } = req.body;
  const db = req.app.get("db");

  const user = await db
    .update_user([user_id, username, name, email, avatarurl])
    .catch(error => console.log(error)); //updates basic info

  req.session.user = {
    user_id: user[0].user_id,
    username: user[0].username,
    name: user[0].name,
    email: user[0].email,
    avatarurl: user[0].avatarurl
  };

  res.json(req.session.user);
};

let logout = (req, res) => {
  req.session.destroy();
  return res.sendStatus(200);
};

let updatePassword = async (req, res) => {
  //this takes in new password and hashes for sql replace
  const { user_id, newPassword } = req.body;
  const db = req.app.get("db");

  const hash = await bcrypt
    .hash(newPassword, 10)
    .catch(error => console.log(error));

  await db.update_password([
    user_id,
    hash // hashed pasword into sql database
  ]);
  return res.sendStatus(200);
};

module.exports = {
  loginControl,
  register,
  updateUser,
  logout,
  updatePassword
};
