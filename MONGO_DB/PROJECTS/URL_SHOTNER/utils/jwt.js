require('dotenv').config()
const jwt = require('jsonwebtoken');

exports.createJwtToken = (payload) => {
  const token = jwt.sign(payload, process.env.JUST_MY_SECRET, { expiresIn: '7d' });
  return token;
}




