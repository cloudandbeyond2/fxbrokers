// models/Register.js
const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'broker' }
}, { versionKey: false });

module.exports = mongoose.model("register", RegisterSchema);
