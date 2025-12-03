const {Schema , model} = require('mongoose');

const userSchema = new Schema({ 
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true , unique: true }
}, { timestamps: true })

const db =model('User', userSchema);

module.exports=db;