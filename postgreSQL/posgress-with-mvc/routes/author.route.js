

const express = require('express');

const router= express.Router();
const { GetAllAuthors } = require('../controllers/authorControllers');
const { CreateAuthorData } = require('../controllers/authorControllers');
const { UpdateAuthorData } = require('../controllers/authorControllers');
const { DeleteAuthorData } = require('../controllers/authorControllers');

// ************ GET all authors
router.get('/', GetAllAuthors);

// ************create author
router.post('/', CreateAuthorData)

// ************update author
router.patch('/:id',UpdateAuthorData) 

// ************delete author
router.delete('/:id',DeleteAuthorData)

module.exports = router;