
const { signupLogic ,loginLogic, homeLogic, logoutLogic, adminDashboardLogic} = require('../controllers/user.controller');
const { sessionCheckMiddleware } = require('../middlewares/sessioncheck.middleware');
const { checkRoleMiddleware } = require('../middlewares/rolechack');



const express = require('express');

const router = express.Router();

router.post('/signup', signupLogic)

// login
router.post('/login', loginLogic)

// home
router.get('/home',sessionCheckMiddleware, homeLogic)

// logout
router.post('/logout', logoutLogic)

// admin dashboard
router.get('/admin' , sessionCheckMiddleware,  checkRoleMiddleware(['admin']),adminDashboardLogic)

module.exports = router;