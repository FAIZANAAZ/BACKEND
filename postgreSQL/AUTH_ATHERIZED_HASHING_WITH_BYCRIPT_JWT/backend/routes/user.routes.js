const express = require('express');
const router = express.Router();
const { signupFunction } = require('../controllers/user.controller');
const { loginFunction ,logoutFunction,adminDashboard} = require('../controllers/user.controller');
const { homeFunction } = require('../controllers/user.controller');
const { sessionCheckMiddleware } = require('../middlewares/sessionCheck');
const { signupValidationMiddleware,loginValidationMiddleware } = require('../middlewares/userValidation');
const { loginLimiterMiddleware } = require('../middlewares/ratelimite');
const { checkRoleMiddleware } = require('../middlewares/roleChackAdmin');


// **********signup route**********
router.post("/signup",signupValidationMiddleware, signupFunction)


// **********login route**********
router.post("/login",loginLimiterMiddleware,loginValidationMiddleware, loginFunction)




// ***********home *********
router.get("/home",sessionCheckMiddleware,homeFunction)

// **********logout route**********
router.post("/logout", logoutFunction)

// *********** admin dashboard *********
router.post("/admin",sessionCheckMiddleware,checkRoleMiddleware(['admin']),adminDashboard)
// yha hmny admin as a argument bheja he 


module.exports=router


