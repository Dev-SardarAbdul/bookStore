import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const createBookHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const createBook = async (title, author, publishYear, summary) => {
    const result = await axios.post("http://localhost:5000/books", {
      title,
      author,
      publishYear,
      summary,
    });

    try {
      if (result.status === 200) {
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { createBook, loading, error };
};
