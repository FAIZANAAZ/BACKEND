const bcrypt = require('bcrypt');

// Password hash karne ka function
exports.createhashPassword = async (clientPassword) => {
  const result = await bcrypt.hash(clientPassword, 10); // 10 salt rounds
  return result;
}

// Password compare karne ka function
exports.comparePassword = async (clientPassword, hashPassword) => {
  const isMatch = await bcrypt.compare(clientPassword, hashPassword);
  return isMatch;
}