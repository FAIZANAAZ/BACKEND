
const jwt = require("jsonwebtoken");

exports.sessionCheckMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided,please log in" });
    }

    const userPayload = jwt.verify(token, process.env.JUST_MY_SECRET);
    req.jwtpayload = userPayload;

  next(); } catch (error) {
    console.error("Error in session check middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};