import React from "react";
import { Link } from "react-router-dom";

function MyWorkItem(props) {
  let style = {
    backgroundImage:
      "url(" + process.env.PUBLIC_URL + "/" + props.imagePath + ")",
  };

  if (props.imagePosition !== "") {
    style = {
      backgroundImage: style.backgroundImage,
      backgroundPosition: props.imagePosition,
    };
  }

  let projectPath = "projects/" + props.projectPath;

  return (
    <Link className="my-work-item" to={projectPath}>
      <div className="my-work-item-image" style={style}></div>
      <div className="my-work-item-hover">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}

export default MyWorkItem;
