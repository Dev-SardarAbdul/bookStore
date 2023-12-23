import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Delete from "./pages/delete";
import Update from "./pages/update";
import BookDetails from "./pages/bookDetails";
import CreateBooks from "./pages/create";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBooks />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
