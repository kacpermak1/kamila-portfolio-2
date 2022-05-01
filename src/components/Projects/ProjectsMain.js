import React from "react";
import { Routes, Route } from "react-router-dom";
import BookSwapp from "./BookSwapp/BookSwapp";
import WeddingPlanner from "./WeddingPlanner/WeddingPlanner";
import NotFound from "../NotFound/NotFoundMain";

function Projects() {
  return (
    <div className="container project-images">
      <Routes>
        <Route path="book-swapp" element={<BookSwapp />} />
        <Route path="wedding-planner" element={<WeddingPlanner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Projects;
