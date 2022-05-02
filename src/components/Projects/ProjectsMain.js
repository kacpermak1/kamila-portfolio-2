import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectImagesLister from "./ProjectImagesLister";
import NotFound from "../NotFound/NotFoundMain";

function Projects() {
  return (
    <div className="container project-images">
      <Routes>
        <Route
          path="book-swapp"
          element={<ProjectImagesLister projectName="Bookswapp" />}
        />
        <Route
          path="wedding-planner"
          element={<ProjectImagesLister projectName="Wedding Planner" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Projects;
