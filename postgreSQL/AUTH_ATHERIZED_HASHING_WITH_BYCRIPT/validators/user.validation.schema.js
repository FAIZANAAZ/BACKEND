const {z}=require('zod')

exports.signupSchema=z.object({
  username:z.string().min(1,"username is required"),
  email:z.string().email("invalid email address"),
  password:z.string().min(6,"password must be at least 6 characters long"),
 })


// login schema
exports.loginSchema=z.object({
  email:z.string().email("invalid email address"),
  password:z.string().min(6,"password must be at least 6 characters long"),
 })