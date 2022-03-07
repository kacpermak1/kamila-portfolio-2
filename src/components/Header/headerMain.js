import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <header id="header-main">
      <nav>
        <div className="container">
          <div className="home-link">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Kamila Stolarska
            </Link>
          </div>
          <ul>
            <li>
              <HashLink smooth to="/#my-work" offset={0} duration={500}>
                My Work
              </HashLink>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/about",
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/contact",
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Home;
