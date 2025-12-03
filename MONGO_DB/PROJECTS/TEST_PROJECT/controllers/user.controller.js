const db = require('../models/user.model');

// signup logic
exports.signupLogic = async (req, res) => {
  const { username, password, email } = req.body;

  const existingUser =  await db.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await db.insertOne({ username, password, email });

  return res.status(201).json({ message: 'User created successfully', user });
} 
