const express = require('express');
const { CreateBookData } = require('../controllers/booksControllers');
const { deleteBookById } = require('../controllers/booksControllers');
const { updateBookById } = require('../controllers/booksControllers');
const { bookValidateMiddleware , updateBookMiddleware, createBookValidateMiddleware,deleteBookMiddleware} = require('../middleware/book.validate.middleware');


const router = express.Router();
const { getAllBooks } = require('../controllers/booksControllers');


// ************ GET all books
router.get('/', bookValidateMiddleware, getAllBooks);


// ************
router.post('/', createBookValidateMiddleware, CreateBookData)

router.delete('/:id' ,deleteBookMiddleware, deleteBookById) 
// ************
router.put('/:id',  updateBookMiddleware, updateBookById)


module.exports = router;
