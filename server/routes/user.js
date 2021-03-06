const jwt = require('jsonwebtoken');
const {
  getAllUsers, createUser, getUser, getUserById,
} = require('../controllers/user');

const jwtOptions = require('../token/options');
const checkIfAuthorized = require('../middlewares/checkifAuthorized');

module.exports = app => {
  app.get('/', checkIfAuthorized, (req, res) => {
    res.json({ message: 'Express is up!' });
  });

  app.get('/users', checkIfAuthorized, (req, res) => {
    getAllUsers().then(user => res.json(user));
  });

  app.get('/user', async (req, res) => {
    const { headers } = req;
    if (headers && headers.authorization) {
      const { authorization } = headers;
      const decoded = jwt.verify(authorization, jwtOptions.secretOrKey);
      try {
        const user = await getUserById(decoded.id);
        res.json(user);
      } catch (e) {
        res.status(500).json({ msg: e.message });
      }
    }
  });

  app.post('/register', async (req, res) => {
    const { name, password } = req.body;
    const user = await getUser({ name });
    if (user) {
      res.status(409).json({ msg: `User ${name} already exists` });
      return false;
    }
    return createUser({ name, password })
      .then(user => res.json({ user, msg: 'account created successfully' }));
  });

  app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    if (name && password) {
      const user = await getUser({ name });
      if (!user) {
        res.status(401).json({ msg: 'No such user found', user });
      }
      if (user.password === password) {
        const payload = { id: user.id };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ msg: 'Successfully logged in', token, user });
      } else {
        res.status(401).json({ msg: 'Password is incorrect' });
      }
    }
  });
};
