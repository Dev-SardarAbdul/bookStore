import axios from "axios";
import { useState } from "react";

export const getAllBooksHook = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const getBooks = async () => {
    try {
      setLoading(true);
      const result = await axios.get("http://localhost:5000/books");

      if (result.status === 200) {
        setLoading(false);
        setBooks(result.data);
      }
    } catch (error) {
      setLoading(false);
      setError("Error fetching books");
    }
  };

  return { loading, books, error, getBooks };
};
