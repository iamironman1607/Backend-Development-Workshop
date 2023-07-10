const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String

  } , {
    timestamps:true
  });
const user = mongoose.model('user', userSchema);

module.exports = user;