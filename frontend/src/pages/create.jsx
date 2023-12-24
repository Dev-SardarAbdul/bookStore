import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/backButton";
import { createBookHook } from "../hooks/createBookHook";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();

  const { createBook, loading, error } = createBookHook();

  const handleCreate = () => {
    createBook(title, author, publishYear, summary);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Create Book</h1>
      <BackButton />

      <div className="flex flex-col border-2 border-gray-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 bg-transparent w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 bg-transparent  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 bg-transparent  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Summary</label>
          <textarea
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 bg-transparent w-full"
          />
        </div>
        <button
          className="p-2 border rounded-lg border-gray-500 m-8"
          onClick={handleCreate}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
