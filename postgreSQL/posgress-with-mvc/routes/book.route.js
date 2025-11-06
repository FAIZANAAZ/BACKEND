const express = require('express');
const { CreateBookData } = require('../controllers/booksControllers');
const { deleteBookById } = require('../controllers/booksControllers');
const { updateBookById } = require('../controllers/booksControllers');


const router = express.Router();
const { getAllBooks } = require('../controllers/booksControllers');





// ************ GET all books
router.get('/', getAllBooks);


// ************
router.post('/', CreateBookData)

router.delete('/:id', deleteBookById) 
// ************
router.put('/:id', updateBookById)


module.exports = router;
