exports.details=function(req, res, next) {
       res.render('login'); 
  };
exports.loginPage=function(req, res, next) {
   res.render('login'); 
};
exports.login=function(req, res, next) {
    console.log('userController login-'+req.body.email)
    console.log('userController login-'+req.body.password)
   res.json('success'); 
};
exports.regdetails=function(req, res, next) {
  res.render('signup'); 
};
exports.signupPage=function(req, res, next) {
  res.render('signup'); 
};
exports.signup=function(req, res, next) {
   console.log('userController signup-'+req.body.firstName)
   console.log('userController signup-'+req.body.lastName)
   console.log('userController signup-'+req.body.email)
   console.log('userController signup-'+req.body.password)
   console.log('userController signup-'+req.body.phoneNumber)
   console.log('userController signup-'+req.body.mgender)
   console.log('userController signup-'+req.body.fgender)
   console.log('userController signup-'+req.body.age)
   console.log('userController signup-'+req.body.checkBox)
  res.json({user:req.body}); 
};
exports.dashboardPage=function(req, res, next) {
  console.log(req.query);
  res.render('dashboard',req.query); 
} 
