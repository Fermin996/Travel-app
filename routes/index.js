const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/',(res,req, next)=>{
  res.render('results')
})

module.exports = router;
