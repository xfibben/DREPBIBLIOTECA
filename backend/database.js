const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://xfibben:xfibben@database.fwlgfbg.mongodb.net/biblioteca?retryWrites=true&w=majority")
  .then((db) => console.log("Db connected"))

