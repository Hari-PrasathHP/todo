const Todo = require("../models/todo");

const route = require("express").Router();

require("../models/todo");

route.post("/newTodo", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.send(todo);
  } catch (e) {
    res.status(400).send({ error: "something went wrong" });
  }
});

route.get("/view/todo/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const todo = await Todo.find({ title })
    res.send(todo);
  } catch (e) {
    res.status(400).send({ error: "something went wrong" });
  }
});

route.get("/view/todo", async (req, res) => {
    try {
      const todo = await Todo.find().sort({ done: 1})
      res.send(todo);
    } catch (e) {
      res.status(400).send({ error: "something went wrong" });
    }
  });

route.patch("/update/todo", async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.body._id }, { $set: req.body });
    res.send({ message: "updated successfully" });
  } catch (e) {
    res.status(400).send({ error: "something went wrong" });
  }
});

route.delete("/delete/todo/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedTodo = await Todo.deleteOne({ _id });
    if (deletedTodo.deletedCount === 1) {
      res.send({ message: "Todo deleted" });
    } else {
      res.send({ message: "No todo found" });
    }
  } catch (e) {
    res.status(400).send({ error: "something went wrong" });
  }
});

module.exports = route