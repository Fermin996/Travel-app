const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
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
