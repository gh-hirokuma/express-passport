const { Schema, mongoose } = require("../utils/db");

const User = new Schema({
  username: String,
  email: String,
  password: String,
  created_at: Number,
  updated_at: Number
});

exports.User = mongoose.model("User", User);
