const express = require('express');
const router = express.Router();
const { signupFunction } = require('../controllers/user.controller');
const { loginFunction ,logoutFunction} = require('../controllers/user.controller');
const { homeFunction } = require('../controllers/user.controller');
const { sessionCheckMiddleware } = require('../middlewares/sessionCheck');
const { signupValidationMiddleware,loginValidationMiddleware } = require('../middlewares/userValidation');


// **********signup route**********
router.post("/signup",signupValidationMiddleware, signupFunction)


// **********login route**********
router.post("/login",loginValidationMiddleware, loginFunction)




// ***********home *********
router.get("/home",sessionCheckMiddleware,homeFunction)

// **********logout route**********
router.post("/logout", logoutFunction)


module.exports=router


