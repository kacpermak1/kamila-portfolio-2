import React from "react";

function MyWorkItem(props) {
  let style = {
    backgroundImage: "url(" + props.imagePath + ")",
  };

  if (props.imagePosition !== "") {
    style = {
      backgroundImage: style.backgroundImage,
      backgroundPosition: props.imagePosition,
    };
  }

  return (
    <a className="my-work-item" href={props.projectPath}>
      <div className="my-work-item-image" style={style}></div>
      <div className="my-work-item-hover">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </a>
  );
}

export default MyWorkItem;
