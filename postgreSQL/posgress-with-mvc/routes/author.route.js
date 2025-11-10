

const express = require('express');

const router= express.Router();
const { GetAllAuthors } = require('../controllers/authorControllers');
const { CreateAuthorData } = require('../controllers/authorControllers');
const { UpdateAuthorData } = require('../controllers/authorControllers');
const { DeleteAuthorData } = require('../controllers/authorControllers');
const { getAuthorValidateMiddleware ,createBookValidateMiddleware,updateBookValidateMiddleware,DeleteBookValidateMiddleware} = require('../middleware/author.validate.middleware');

// ************ GET all authors
router.get('/',getAuthorValidateMiddleware, GetAllAuthors);

// ************create author
router.post('/',createBookValidateMiddleware, CreateAuthorData)

// ************update author
router.patch('/:id',updateBookValidateMiddleware,UpdateAuthorData) 

// ************delete author
router.delete('/:id',DeleteBookValidateMiddleware,DeleteAuthorData)

module.exports = router;