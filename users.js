var express = require('express');
var router = express.Router();
let userController=require('../controllers/userController');
/* GET login details. */
router.get('/details',userController.details);
router.get('/login',userController.loginPage);
router.post('/login',userController.login);
/*GET signup details.*/
router.get('/register',userController.regdetails);
router.get('/signup',userController.signupPage);
router.post('/signup',userController.signup);
/*GET Dashboard details.*/
router.get('/dashboard',userController.dashboardPage);
module.exports = router;
