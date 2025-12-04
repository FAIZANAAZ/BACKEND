const user_collection = require('../models/user.model');
const jwt = require('jsonwebtoken');
const session_collection = require('../models/session.model');


// signup logic
exports.signupLogic = async (req, res) => {
  const { username, password, email } = req.body;

  const existingUser =  await user_collection.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await user_collection.insertOne({ username, password, email });

  return res.status(201).json({ message: 'User created successfully', user });
} 

// login logic
exports.loginLogic = async (req, res) => {
  const { email, password } = req.body;
// find user by email
  const existingUser =  await user_collection.findOne({ email });

  // validation
  if (!existingUser) {
    return res.status(400).json({ message: 'User does not exist' });
  }
  // check password

  if (existingUser.password !== password) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  // jwt payload
  const payload = {
    email: existingUser.email,
    _id: existingUser._id,
    name: existingUser.username
  }
// token create 
  const JWT_token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

  console.log("JWT_token",JWT_token);

  await session_collection.insertOne({
    userId: existingUser._id,
    userPassword: existingUser.password,
    jwtToken: JWT_token
 
  });

  // add cookies
  res.cookie('token', JWT_token, 
    { httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000 ,
    secure: false,
    sameSite: 'lax'});
  

  return res.status(200).json({ message: 'Login successful' });
}

// home logic
exports.homeLogic = async (req, res) => {
  const jwtPayload = req.jwtPayload;

  console.log("jwtPayload",jwtPayload);

  const userFound = await user_collection.findOne({ _id: jwtPayload._id });
  if (!userFound) {
    return res.status(400).json({ message: 'User not found ,please login'});
  }
  return res.status(200).json({ message: ' Welcome Home page' });
}

// logout logic
exports.logoutLogic = async (req, res) => {
  res.clearCookie('token');
  return res.status(200).json({ message: 'Logout successful' });
}

// 
// admin logic
exports.adminDashboardLogic = async (req, res) => {
  return res.status(200).json({ message: ' Welcome to Admin Dashboard' });
}