
exports.globleMiddleware=(req, res, next)=>{
  console.log(`${new Date().toISOString()} - Method ${req.method} - Path ${req.path}`);
  next();
}