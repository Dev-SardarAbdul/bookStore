import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const deleteBookHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteBook = async (id) => {
    setLoading(true);
    const result = await axios.delete(`http://localhost:5000/books/${id}`);

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

  return { loading, error, deleteBook };
};
