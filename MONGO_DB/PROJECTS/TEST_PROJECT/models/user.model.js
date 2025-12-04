const {Schema , model} = require('mongoose');

const userSchema = new Schema({ 
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true , unique: true },
  role: { type: String, default: 'user' ,required: true}
}, { timestamps: true })

const user_collection =model('User', userSchema);

module.exports=user_collection;