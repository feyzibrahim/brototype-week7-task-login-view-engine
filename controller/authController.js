let user = {
  username: "faiz",
  password: "123",
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username && password !== user.password) {
    res.render("index", { message: "Invalid Credentials" });
  }

  req.session.username = username;
  req.session.password = password;
  req.session.isAuth = true;

  res.redirect("/");
};

const logoutUser = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports = {
  loginUser,
  logoutUser,
};
