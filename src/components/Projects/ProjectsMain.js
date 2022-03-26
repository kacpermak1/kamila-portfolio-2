import React from "react";
import { Routes, Route } from "react-router-dom";
import BookSwapp from "./BookSwapp/BookSwapp";
import NotFound from "../NotFound/NotFoundMain";

function Projects() {
  return (
    <div className="container">
      <Routes>
        <Route path="book-swapp" element={<BookSwapp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Projects;
