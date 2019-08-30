const bcrypt = require("bcryptjs");

let loginControl = async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const user = await db.check_user(username).catch(err => console.log(err));

  if (!user[0]) {
    res.status(401).json("Incorrect username or password");
  } else {
    const isAuthorized = await bcrypt
      .compare(password, user[0].password)
      .catch(err => console.log(err));

    if (!isAuthorized) {
      res.status(401).json("Incorrect username or password");
    } else {
      //console.log(user[0]);

      req.session.user = {
        id: user[0].user_id,
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
  const { username, name, password, email, avatarurl } = req.body;
  const db = req.app.get("db");

  const user = await db.check_user(username).catch(err => console.log(err));
  if (user[0]) {
    res.status(401).json("Username is already taken");
  } else {
    const hash = await bcrypt.hash(password, 10).catch(err => console.log(err));

    const newUser = await db.create_user([
      username,
      name,
      hash,
      email,
      avatarurl
    ]);

    req.session.user = {
      user_id: newUser[0].user_id,
      username,
      name,
      email,
      avatarurl
    };
    res.json(req.session.user);
  }
};

let updateUser = async (req, res) => {
  const { user_id, username, name, email, avatarurl } = req.body;
  const db = req.app.get("db");

  const user = await db
    .update_user([user_id, username, name, email, avatarurl])
    .catch(err => console.log(err)); //updates basic info

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

module.exports = {
  updateUser,
  loginControl,
  register,
  logout
};
