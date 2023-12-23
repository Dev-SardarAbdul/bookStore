import React, { useState } from "react";
import BackButton from "../components/backButton";

const DeleteBooks = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete Book</h1>
      <BackButton />

      <div className="flex flex-col items-center border-2 border-gray-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

        <button className="p-4 bg-red-600 text-white m-8 w-full">
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
