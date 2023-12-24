const Book = require("../models/booksModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    return res.status(501).json(error.message);
  }
};

const getSingleBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      res.status(404).json({ message: "Book Not Found!" });
    }
    res.status(200).json(book);
  } catch (error) {
    return res.status(501).json(error.message);
  }
};

const createBook = async (req, res) => {
  const { title, author, publishYear, summary } = req.body;

  if (!title || !author || !summary || !publishYear) {
    return res.status(501).json({ error: "All fields must be filled!" });
  }

  try {
    await Book.create({ title, author, summary, publishYear });
    res.status(200).json({ message: "Success!" });
  } catch (error) {
    return res.status(501).json(error.message);
  }
};

const updateBooks = async (req, res) => {
  const { id } = req.params;
  const { title, author, summary, publishYear } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, summary, publishYear },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBooks,
  deleteBook,
};
