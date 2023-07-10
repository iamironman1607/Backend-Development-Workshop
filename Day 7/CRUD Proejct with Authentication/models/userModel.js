const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String

  } , {
    timestamps:true
  });

userSchema.pre('save', async function(next){

  const salt =  await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);

  next();

  });




const user = mongoose.model('user', userSchema);





module.exports = user;