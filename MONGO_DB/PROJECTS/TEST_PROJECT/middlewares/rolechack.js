
const user_collection = require('../models/user.model');
exports.checkRoleMiddleware = (allowedRole) => {
  return async (req, res, next) => {  
    const jwtPayload = req.jwtPayload;

    // find the user by jwt user id from database
    const userFound = await user_collection.findOne({ _id: jwtPayload._id });
    if (!userFound) {
      return res.status(404).json({ message: 'User not found' });
    }

    // check user role
    if(!allowedRole.includes(userFound.role)){
      return res.status(403).json({ message: 'Forbidden: You do not have the required role ,permission only admin can access' });
    }

    next();
  }


}