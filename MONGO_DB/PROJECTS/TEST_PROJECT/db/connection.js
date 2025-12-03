const mongoose = require('mongoose');

exports.connectDB = async (Connection) => {
  
  const connection=await mongoose.connect(Connection)
  return connection;
}