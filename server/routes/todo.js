const { getAllTodos, getUserTodos, createTodo } = require("../controllers/todo");

module.exports = app => {
  app.get("/todos", function (req, res) {
    getAllTodos().then(todos => res.json(todos));
  });

  app.get("/userTodos", async function (req, res) {
    const { name } = req.body;
    const user = await getUser({ name });
    const userTodos = await getUserTodos({ name: user });
    return res.json(userTodos);
  });

  app.post("/createTodo", async function (req, res) {
    const { description, state, userId } = req.body;
    if (!description || !state) {
      res.status(422).json({ msg: 'Please provide missing fields' });
      return false;
    }
    const newTodo = await createTodo({ description, state, userId });
    return res.json({ newTodo, msg: "todo item created successfully" })
  });
}