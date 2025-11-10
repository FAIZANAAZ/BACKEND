
const {getAuthorSchema,createAuthorSchema,updateAuthorSchemaById,updateAuthorSchemaByBody,DeleteAuthorSchema}=require('../validators/author.validator.schema');
exports.getAuthorValidateMiddleware= (req, res, next) => {

  try{
    // const {search,id}=req.query
    getAuthorSchema.parse(req.query);
    next();
  }catch(error){
    console.error('Error validating author:', error);
    res.status(400).json({ message: 'Invalid author data' , error: error.issues});
  }
}

// *****************

exports.createBookValidateMiddleware= (req, res, next) => {
      // const {firstName,lastName,email}=req.body;
      try{
        createAuthorSchema.parse(req.body);
        next();
      }catch(error){
        console.error('Error validating author:', error);
        res.status(400).json({ message: 'Invalid author data' , error: error.issues});
      }
}

// *****************
exports.updateBookValidateMiddleware= (req, res, next) => {
      // const {firstName,lastName,email}=req.body;
        // const {id}=req.params;
      try{
        updateAuthorSchemaByBody.parse(req.body);
        updateAuthorSchemaById.parse(req.params);

        next();
      }catch(error){
        console.error('Error validating author:', error);
        res.status(400).json({ message: 'Invalid author data' , error: error.issues});
      }
}


// *****************
exports.DeleteBookValidateMiddleware= (req, res, next) => {
    // const {id}=req.params;
      try{
        DeleteAuthorSchema.parse(req.params);
        next();
      }catch(error){
        console.error('Error validating author:', error);
        res.status(400).json({ message: 'Invalid author data' , error: error.issues});
      }
}
