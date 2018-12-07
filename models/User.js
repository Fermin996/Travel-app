const PLM = require('passport-local-mongoose');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

<<<<<<< HEAD
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
=======
const userSchema = new Schema({
  username: String,
  email: String,
  status: String,
  location: String,
  description: String,
  startDate: {type:String, default:"Today"},
  dates:[ ],
>>>>>>> 44f043ed073ec14b79fce5e06b266119ca96f84d
  endDate: {type:String, default:"indefinitely"},
  bio: String,
  age: Number,
  languages: String,
  interests: String,
  rating: Number,
  occupation: String,
<<<<<<< HEAD
  photoURL: {
    type: String,
    default: "https://cdn2.vectorstock.com/i/1000x1000/19/01/user-icon-male-person-symbol-profile-avatar-sign-vector-18991901.jpg"
=======
  photoUrl: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PYuh3GbOstcwFJLzp6ThS_ta-XK_4vDKt5U7i18cfexXRuMX'
>>>>>>> 44f043ed073ec14b79fce5e06b266119ca96f84d
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
