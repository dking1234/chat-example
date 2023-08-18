const User = require('./UserModel');

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createUser,
}