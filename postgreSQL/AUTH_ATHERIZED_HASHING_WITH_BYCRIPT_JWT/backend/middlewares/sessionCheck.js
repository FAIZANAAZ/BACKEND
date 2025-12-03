const db = require('../db/connection');
const { eq } = require('drizzle-orm');
const { userTable } = require('../model/user.model');
const jwt = require('jsonwebtoken');

exports.sessionCheckMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // no token → user logged out
    if (!token) {
      req.user = null;
      return next();
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find user in DB
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, decoded.userId));

    if (!user) {
      res.clearCookie("token");
      return res.status(401).json({ error: "User invalid or removed" });
    }

    // Attach user data
    req.user = user;

    next();
  } catch (err) {
    // token expired / invalid case
    res.clearCookie("token");
    return res.status(401).json({ error: "Session expired or invalid token" });
  }
};
