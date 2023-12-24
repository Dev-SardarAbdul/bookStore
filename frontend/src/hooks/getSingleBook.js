import axios from "axios";
import { useState } from "react";

export const getSingleBookHook = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");

  const getBook = async (id) => {
    try {
      setLoading(true);
      const result = await axios.get(`http://localhost:5000/books/${id}`);

      if (result.status === 200) {
        setLoading(false);
        setBook(result.data);
      }
    } catch (error) {
      setLoading(false);
      setError("Error fetching book");
    }
  };

  return { loading, book, error, getBook };
};
