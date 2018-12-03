const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  photoUrl: String,
  role:{
    type:String,
    enum:['GUEST', 'LOCAL', 'TRAVELER'],
    default: 'GUEST',
  }  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});



const User = mongoose.model('User', userSchema);

module.exports = User;
