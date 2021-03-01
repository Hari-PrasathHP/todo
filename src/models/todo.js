const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,

  done: {
    type: Boolean,
    default: false,
  },
}, {
    timestamps: true
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
