const Register = require("../model/Register");

// Register new user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const userExists = await Register.findOne({ email });
    if (userExists) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const newUser = new Register({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error registering user" });
  }
};

// Login existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await Register.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        email: user.email,
        username: user.username,
        role: user.role,
      }
    });
  } catch (err) {
    res.status(500).json({ error: "Login error" });
  }
};

// Get all users (optional route)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Register.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
