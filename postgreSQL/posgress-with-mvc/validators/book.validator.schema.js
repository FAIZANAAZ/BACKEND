
// npm i zod
const { z } = require('zod');

exports.getBookValidateSchema = z.object({
  search:z.string().min(3).optional(),
  bookId:z.uuid().optional(),
  authorId:z.uuid().optional()
})

// yha sy hmny query receive ki he ke kiya kiya a skta he or schema bna kr bheja he zod ki mada sy 

// ******************
exports.createBookValidateSchema = z.object({
    title:z.string({required_error:"Search parameter is required"}).min(3,{message:"Search must be at least 3 characters long"}),
   description:z.string().optional(),
    authorId:z.uuid()
    // optional na den to matlb he ke ye field required he
});


// ******************

exports.updateBookValidateIdSchema = z.object({
   id:z.uuid(),

});

exports.updateBookValidateBodySchema = z.object({
    title:z.string().min(3).optional(),
   description:z.string().optional(),
    authorId:z.uuid().optional()
})

// ******************
exports.deleteBookValidateIdSchema = z.object({
    id:z.uuid()
})