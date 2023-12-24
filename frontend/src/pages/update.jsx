import React, { useState, useEffect } from "react";
import BackButton from "../components/backButton";
import { useParams } from "react-router-dom";
import { updateBookHook } from "../hooks/updateBook";
import { getSingleBookHook } from "../hooks/getSingleBook";

const UpdateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [summary, setSummary] = useState("");

  const { id } = useParams();

  const { updateBook, loading, error } = updateBookHook();
  const { getBook, book } = getSingleBookHook();

  useEffect(() => {
    getBook(id);
  }, []);

  const handleUpdate = () => {
    updateBook(id, title, author, publishYear, summary);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Edit Book</h1>
      <BackButton />

      <div className="flex flex-col border-2 border-gray-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={book?.title || title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full bg-transparent"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={book?.author || author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full bg-transparent "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={book?.publishYear || publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full bg-transparent "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Summary</label>
          <textarea
            type="number"
            value={book?.summary || summary}
            onChange={(e) => setSummary(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full bg-transparent "
          />
        </div>
        <button
          className="p-2 border border-gray-500 m-8"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateBooks;
