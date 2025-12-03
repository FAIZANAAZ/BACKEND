const loginLimiter = require("express-rate-limit");

exports.loginLimiterMiddleware = loginLimiter({
  windowMs: 15 * 60 * 1000, // 15 minute
  limit: 5, // limit each IP to 5 login requests per windowMs
  message: {error:"Too many login attempts from this IP, please try again after 15 minutes"},
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false// Disable the `X-RateLimit-*` headers
})

// rate limit taky ak waqt me bs 5 login kr skay phir again 15 minute baad kr skay wrna session id bhut bnti jaygi or server crash ho jyga