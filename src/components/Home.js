import React from "react";
import HomeSectionOne from "./Home/HomeSectionOne";
import MyWork from "./Home/MyWork";

function Home() {
  return (
    <>
      <div className="container">
        <HomeSectionOne />
        <MyWork />
      </div>
    </>
  );
}

export default Home;
