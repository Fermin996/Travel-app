const PLM = require('passport-local-mongoose');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var dateFormat = require('dateformat');
var now = new Date();

now = dateFormat(now, "m/dd/yyyy")


const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  facebookId: String,
  status: String,
  location: String,
  description: String,
  startDate: {type:String, default:now},
  endDate: {type:String, default:"indefinitely"},
  bio: String,
  age: Number,
  languages: String,
  interests: String,
  rating: Number,
  occupation: String,
  photoURL: {
    type: String,
    default: "https://cdn2.vectorstock.com/i/1000x1000/19/01/user-icon-male-person-symbol-profile-avatar-sign-vector-18991901.jpg"
  },
  references:{
    type: Number,
    default: 0
  }, 
    
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


userSchema.plugin(PLM, { usernameField: 'email' });
const User = mongoose.model('User', userSchema);
module.exports = User;
