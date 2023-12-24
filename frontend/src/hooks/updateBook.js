import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const updateBookHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const updateBook = async (id, title, author, publishYear, summary) => {
    const result = await axios.put(`http://localhost:5000/books/${id}`, {
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

  return { updateBook, loading, error };
};
