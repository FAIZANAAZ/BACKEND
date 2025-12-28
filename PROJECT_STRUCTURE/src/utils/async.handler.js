

const asyncHandler = (fn) => {
 return function (req, res, next) {
   Promise.resolve(fn(req, res, next)).catch(next);
 }
}
export  {asyncHandler};

// ye ek middleware he jo async functions ko handle krta he or agr koi error ati he to next middleware ko pass kr deta he jese error handler waghera 
// isse ye faida hoga ke har baar try catch likhnay ki zarorat nhi pary gi apny controllers me or code clean rhe ga