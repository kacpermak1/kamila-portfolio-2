import React from "react";
import data from "./../Home/db.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectImagesLister(props) {
  const projectName = props.projectName;
  const project = data.uxuiprojects.filter(
    (element) => element.name === projectName
  )[0];

  const containerClass = props.projectName.replace(/\s/g, "-").toLowerCase();

  return (
    <div className={containerClass}>
      {[...Array(project.numberOfProjectImages)].map((e, i) => (
        <LazyLoadImage
          alt={"project-pic-" + (i + 1)}
          src={
            process.env.PUBLIC_URL +
            "/project-assets/" +
            project.linkPath +
            "/" +
            (i + 1) +
            ".png"
          }
          key={i}
        />
      ))}
    </div>
  );
}

export default ProjectImagesLister;
