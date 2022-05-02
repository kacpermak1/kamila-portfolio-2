import React from "react";

function HomeSectionOne() {
  let style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "/IMG_6668.JPG)",
  };

  return (
    <section className="section-one">
      <p>
        <span>Hello,</span>
        <span>I am Kamila,</span>
        <span>
          UI/UX designer, based in Oxfordshire. I am passionate about creating
          user friendly designes.
        </span>
      </p>
      <div className="home-image" style={style}></div>
    </section>
  );
}

export default HomeSectionOne;
