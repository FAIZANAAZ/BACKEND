const express = require("express");

const { getallbooks, findbook, addbook } = require("../controllers/books_logic");
const middleware = require("../middleware/auth");

const routes = express.Router();

// Get all books
routes.get("/", middleware, getallbooks);

// Get book by id
routes.get("/:bookId", findbook);

// Add new book
routes.post("/", addbook);

module.exports = routes;
