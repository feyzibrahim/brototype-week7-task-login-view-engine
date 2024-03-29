const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const data = require("./data");

const authRoutes = require("./routes/auth");

const app = express();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({
    secret: "Hello World",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("index", { title: "Login", message: "" });
});

app.get("/", (req, res) => {
  if (!req.session.isAuth) {
    res.redirect("/login");
  } else {
    res.render("home", { title: "Home", data });
  }
});

app.use("/auth", authRoutes);

app.listen(4000, () => {
  console.log("App listening to port 4000");
});
