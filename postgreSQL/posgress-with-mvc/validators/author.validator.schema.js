
const { z } = require('zod');
// req.query
exports.getAuthorSchema= z.object({
 search:z.string().optional(),
 id:z.uuid().optional()
});

// ******************
// req.body
exports.createAuthorSchema= z.object({
  firstName:z.string({required_error:"first name is required"}).min(3,{message:"first name must be at least 3 characters"}),
  lastName:z.string().min(3,{message:"last name must be at least 3 characters"}).optional(),
  email:z.email({message:"invalid email address"})
})

// ******************
// req.params
exports.updateAuthorSchemaById= z.object({
  id:z.uuid({message:"invalid author id"})
});

// req.body
exports.updateAuthorSchemaByBody= z.object({
  firstName:z.string().min(3,{message:"first name must be at least 3 characters"}).optional(),
  lastName:z.string().min(3,{message:"last name must be at least 3 characters"}).optional(),
  email:z.email({message:"invalid email address"}).optional()
})

// ******************
// req.params
exports.DeleteAuthorSchema= z.object({
  id:z.uuid({message:"invalid author id"})
});