const express = require('express');
const router = express.Router();
const { signupFunction } = require('../controllers/user.controller');
const { loginFunction } = require('../controllers/user.controller');
const { homeFunction } = require('../controllers/user.controller');
const { sessionCheckMiddleware } = require('../middlewares/sessionCheck');


// **********signup route**********
router.post("/signup", signupFunction)


// **********login route**********
router.post("/login", loginFunction)

// ***********home *********
router.get("/home",sessionCheckMiddleware,homeFunction)


module.exports=router


