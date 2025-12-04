const {Schema, model} = require('mongoose');

const sessionSchema = new Schema({
  userId: { 
    type: String,  required: true },
   userPassword: { type: String, required: true },
   jwtToken: { type: String, required: true },
}, { timestamps: true });

const session_collection = model('session_collection', sessionSchema);

module.exports = session_collection;