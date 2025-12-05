const express = require('express');
const { shortenUrlFunction } = require('../controllers/url.controller');
const { sessionCheckMiddleware } = require('../middlewares/sessionchack.middleware');



const router = express.Router();

// long url 
router.post("/",sessionCheckMiddleware, shortenUrlFunction);

module.exports = router;