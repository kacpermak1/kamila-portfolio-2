import React from "react";

function MyWorkItem(props) {
  return (
    <a href={props.projectPath}>
      <img alt={props.imageName} src={props.imagePath} />
    </a>
  );
}

export default MyWorkItem;
