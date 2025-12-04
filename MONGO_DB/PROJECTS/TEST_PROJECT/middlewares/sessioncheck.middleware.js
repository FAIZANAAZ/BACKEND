
const jwt = require('jsonwebtoken');

exports.sessionCheckMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // verify token from jwt to get payload
  const decodedPayload = jwt.verify(token, process.env.JWT_SECRET); // decodedPayload

  req.jwtPayload = decodedPayload;
  next();
}