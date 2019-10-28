const passport = require("passport");
const jwt = require("jsonwebtoken");
const { getAllUsers, createUser, getUser } = require("../utils");

module.exports = (app, jwtOptions) => {
  app.get("/", function(req, res) {
    res.json({ message: "Express is up!" });
  });

  app.get("/users", function(req, res) {
    getAllUsers().then(user => res.json(user));
  });

  app.post("/register", async function(req, res, next) {
    const { name, password } = req.body;
    const user = await getUser({ name });
    if (user) {
      res.status(409).json({ msg: `User ${name} already exists` });
      return false;
    }
    createUser({ name, password }).then(user =>
      res.json({ user, msg: "account created successfully" })
    );
  });

  app.post("/login", async function(req, res, next) {
    const { name, password } = req.body;
    if (name && password) {
      const user = await getUser({ name });
      if (!user) {
        res.status(401).json({ msg: "No such user found", user });
      }
      if (user.password === password) {
        const payload = { id: user.id };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ msg: "Successfully logged in", token, user });
      } else {
        res.status(401).json({ msg: "Password is incorrect" });
      }
    }
  });

  app.get("/todos", passport.authenticate("jwt", { session: false }), function(
    req,
    res
  ) {
    res.json("Success! You can now see this without a token.");
  });
};
