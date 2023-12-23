const express = require("express");
const {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBooks,
  deleteBook,
} = require("../controllers/bookControllers");

const booksRouter = express.Router();

booksRouter.post("/", createBook);

booksRouter.get("/", getAllBooks);

booksRouter.get("/:id", getSingleBook);

booksRouter.put("/:id", updateBooks);

booksRouter.delete("/:id", deleteBook);

module.exports = booksRouter;
