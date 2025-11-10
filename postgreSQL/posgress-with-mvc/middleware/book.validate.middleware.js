

const { getBookValidateSchema , createBookValidateSchema ,updateBookValidateIdSchema,updateBookValidateBodySchema,deleteBookValidateIdSchema} = require('../validators/book.validator.schema');
exports.bookValidateMiddleware=(req, res, next) => {
  // const { title, author, publishedDate } = req.body;

  try{
    getBookValidateSchema.parse(req.query)
    // hm yha sy qury bhejry hen or schema sy validate krwary hen
    next();
  }catch(error){
    console.error('Error validating book:', error);
    res.status(400).json({ message: 'Invalid book data' , error: error.issues});
  }
}




// ******************


exports.createBookValidateMiddleware=(req, res, next) => {
  // const { title, author, publishedDate } = req.body;

  try{
    createBookValidateSchema.parse(req.body)
    // hm yha sy qury bhejry hen or schema sy validate krwary hen
    next();
  }catch(error){
    console.error('Error validating book:', error);
    res.status(400).json({ message: 'Invalid book data' , error: error.issues});
  }
}

// ******************

exports.updateBookMiddleware=(req, res, next) => {
  // const id=req.params.id;
  // const {title,description,authorId}=req.body; 
  try{
    updateBookValidateIdSchema.parse(req.params)
    // hm yha sy qury bhejry hen or schema sy validate krwary hen
    updateBookValidateBodySchema.parse(req.body)

    next();
  }catch(error){
    console.error('Error validating book:', error);
    res.status(400).json({ message: 'Invalid book data' , error: error.issues});
  }
}


// ******************

exports.deleteBookMiddleware=(req, res, next) => {
   try{
    // const id=req.params.id;
    deleteBookValidateIdSchema.parse(req.params)
  

    next();
  }catch(error){
    console.error('Error validating book:', error);
    res.status(400).json({ message: 'Invalid book data' , error: error.issues});
  }
}