const express = require('express');
const router = express.Router();
const app = express();
const { redirectFunction } = require("../controllers/user.controller");

const { signupFunction, loginFunction } = require("../controllers/user.controller");

router.post("/signup", signupFunction);

// login
router.post("/login", loginFunction);

// 
app.get("/:shortId",redirectFunction);

module.exports = router;