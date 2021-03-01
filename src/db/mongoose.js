const mongoose = require("mongoose");

const mongodb =
  "mongodb+srv://hariuser:hari118@cluster0.hf4ci.mongodb.net/todo?retryWrites=true&w=majority";

mongoose
  .connect(mongodb, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch(() => {
    console.log("db not connected");
  });
