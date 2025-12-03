
const { signupLogic } = require('../controllers/user.controller');



const express = require('express');

const router = express.Router();

router.post('/signup', signupLogic)

module.exports = router;