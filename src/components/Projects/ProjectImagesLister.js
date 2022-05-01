import React from "react";
import data from "./../Home/db.json";

function ProjectImagesLister(props) {
  const projectName = props.projectName;
  const project = data.uxuiprojects.filter(
    (element) => element.name === projectName
  )[0];

  return (
    <>
      {[...Array(project.numberOfProjectImages)].map((e, i) => (
        <img
          alt={"project-pic-" + (i + 1)}
          src={"../project-assets/" + project.linkPath + "/" + (i + 1) + ".png"}
          loading="lazy"
        />
      ))}
    </>
  );
}

export default ProjectImagesLister;
