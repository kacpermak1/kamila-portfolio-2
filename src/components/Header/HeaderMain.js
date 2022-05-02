import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Home() {
  const [mobileMenuActiveClass, setActiveClass] = React.useState("");

  const toggleMobileMenuClass = () => {
    if (document.body.clientWidth <= 767) {
      if (mobileMenuActiveClass === "") {
        setActiveClass(" active");
      } else {
        setActiveClass("");
      }
    }
  };

  return (
    <header id="header-main">
      <nav>
        <div className="container">
          <div className="home-link">
            <HashLink
              smooth
              to="/#top"
              duration={500}
              offset={30}
              onClick={
                mobileMenuActiveClass !== "" ? toggleMobileMenuClass : null
              }
            >
              Kamila Stolarska
            </HashLink>
          </div>
          <ul className={mobileMenuActiveClass}>
            <li>
              <HashLink
                smooth
                to="/#my-work"
                offset={0}
                duration={500}
                onClick={toggleMobileMenuClass}
              >
                My Work
              </HashLink>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/about",
                }}
                onClick={toggleMobileMenuClass}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/contact",
                }}
                onClick={toggleMobileMenuClass}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div
            className={"hamburger-icon" + mobileMenuActiveClass}
            onClick={toggleMobileMenuClass}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Home;
