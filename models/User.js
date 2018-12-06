const PLM = require('passport-local-mongoose');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  status: String,
  location: String,
  description: String,
  startDate: {type:String, default:"Today"},
  dates:[ ],
  endDate: {type:String, default:"indefinitely"},
  bio: String,
  age: Number,
  languages: String,
  interests: String,
  rating: Number,
  occupation: String,
  photoUrl: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PYuh3GbOstcwFJLzp6ThS_ta-XK_4vDKt5U7i18cfexXRuMX'
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
