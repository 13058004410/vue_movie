var express = require('express');
var router = express.Router();
var usersController=require('../controllers/users.js');
const { pool } = require('../pool.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // pool.query('select*from zongbuxinwen',function(err,result){
  //   res.send(result)
  //   console.log(result)
	// })
  res.send('respond with a resource');
});







router.post('/login',usersController.login)
router.post('/register',usersController.register)
router.get('/verify',usersController.verify)
router.get('/logout',usersController.logout)
router.get('/getUser',usersController.getUser)
router.post('/findPassword',usersController.findPassword)




module.exports = router;
