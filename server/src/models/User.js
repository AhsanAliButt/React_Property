const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    default: 28,
  },
  tc: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
