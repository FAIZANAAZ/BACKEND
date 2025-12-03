

exports.checkRoleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (req.user==null) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied. Insufficient permissions." });
    }
// hmny yha sy data base me chack kiya he ke user ka role admin he ya nhi agr admin he to hi osy agy jane dena he
    next();
  }
}