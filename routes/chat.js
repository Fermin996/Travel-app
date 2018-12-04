const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const chat = require('../models/Chat')
const io = require('socket.io').listen(chat)
  
users = [];
coonnections = [];

router.get('/', (req, res, next) => {
  res.render('chat');
});

console.log('this is almost working')


io.on('connection', function(socket){
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

module.exports = router;