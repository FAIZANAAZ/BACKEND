const { signupSchema, loginSchema } = require("../validators/user.validation.schema");

// Signup Validation Middleware
exports.signupValidationMiddleware = (req, res, next) => {
  try {
    signupSchema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      errors: err.issues || err.errors,  // safest
    });
  }
};

// Login Validation Middleware
exports.loginValidationMiddleware = (req, res, next) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      errors: err.issues || err.errors,
    });
  }
};
