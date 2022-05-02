import React from "react";

function About() {
  let style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "/IMG_6925.JPG)",
  };

  return (
    <div className="container">
      <section className="about-me">
        <div
          className="about-me-image hidden-md hidden-lg hidden-xl"
          style={style}
        ></div>
        <div className="column-left">
          <h2>About me</h2>
          <p>
            I am UI/UX designer, graduated from Google UX Design Course. I am
            passionate about building the best solutions that will make a
            significant impact on users. I love working on projects that make
            people happy. I enjoy learning new things and I am open to new
            challenges.
          </p>
          <a
            target="_blank"
            href="/Kamila_Stolarska_Resume.pdf"
            className="button primary-button alt"
          >
            Resume
          </a>
        </div>
        <div className="about-me-image hidden-xs hidden-sm" style={style}></div>
      </section>
      <section>
        <p>Reach out to me</p>
        <div className="social-icons">
          <a
            href="https://uk.linkedin.com/in/kamilastolarska"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="linkedin"
              src={process.env.PUBLIC_URL + "/linkedin.svg"}
            />
          </a>
          <a
            href="https://www.behance.net/kamilastolarska"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="behance" src={process.env.PUBLIC_URL + "/behance.svg"} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
