import React, { useEffect, useState } from "react";
import BackButton from "../components/backButton";
import { getSingleBookHook } from "../hooks/getSingleBook";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  const { getBook, loading, error, book } = getSingleBookHook();
  useEffect(() => {
    getBook(id);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Book Details</h1>
      <BackButton />
      <div className="flex flex-col border-2 border-gray-500 rounded-xl w-fit p-4 mx-auto">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Id</span>
          <span>{book?._id}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title</span>
          <span>{book?.title}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author</span>
          <span>{book?.author}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year</span>
          <span>{book?.publishYear}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Create Time</span>
          <span>{new Date().toString()}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
          <span>{new Date().toString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
