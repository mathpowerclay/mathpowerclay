import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="hero"
            className="navbar-logo"
            onClick={closeMobileMenu}
            spy={true}
            smooth={true}
            duration={500}
          >
            MATHPOWERCLAY&nbsp;
            <img src="https://i.imgur.com/JEodSva.png"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="hero"
                className="nav-links"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="cards"
                className="nav-links"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                duration={500}
              >
                POWER CLAY&nbsp;
                <img src="https://i.imgur.com/UudgPWs.png"></img>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}

            <li>
              <Link
                to="contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" onClick={"contact"}>
              CONTACT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
