import React, { useState } from "react";
import data from "./db.json";
import MyWorkItem from "./MyWorkItem";

function MyWork() {
  const [buttonActive, setButtonActive] = useState(1);
  const buttonClass = "button primary-button";
  const buttonClassActive = buttonClass + " active";

  let currentData;
  currentData = buttonActive === 1 ? data.uxuiprojects : data.codeprojects;

  return (
    <section id="my-work" className="my-work">
      <div className="buttons">
        <div
          className={buttonActive === 1 ? buttonClassActive : buttonClass}
          onClick={() => setButtonActive(1)}
        >
          UI/UX
        </div>
        <div
          className={buttonActive === 2 ? buttonClassActive : buttonClass}
          onClick={() => setButtonActive(2)}
        >
          Coding
        </div>
      </div>

      <div className="work">
        {currentData.map((e, i) => {
          return (
            <MyWorkItem
              key={i}
              projectPath={e.linkPath}
              name={e.name}
              description={e.description}
              imagePath={e.imageName}
              imagePosition={e.imagePosition ? e.imagePosition : ""}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MyWork;
