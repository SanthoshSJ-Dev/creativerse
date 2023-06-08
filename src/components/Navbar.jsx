import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

import '../styles/temp.css';

const Navbar = () => {
  useEffect(() => {
    const menuIcons = document.querySelector(".menu-icons");
    const nav = document.querySelector("nav");

    const handleClick = () => {
      nav.classList.toggle("active");
    };

    menuIcons.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      menuIcons.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="menu-icons">
              <i className="fas fa-bars"><CgMenuRight color="var(--primary-color)"/></i>
              <i className="fas fa-times"><MdClear color="var(--primary-color)"/></i>
            </div>
            <a href="index.html" className="logo">
              Creativerse
            </a>
            <ul className="nav-list">
              <li>
                <a href="#">
                  Menu <i className="fas fa-caret-down"><MdKeyboardArrowDown/></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Navel</a>
                  </li>
                  <li>
                    <a href="#">
                      Mandarine
                      <i className="fas fa-caret-down"><MdKeyboardArrowDown/></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Cara Cara</a>
                      </li>
                      <li>
                        <a href="#">Tangerine</a>
                      </li>
                      <li>
                        <a href="#">
                          Others
                          <i className="fas fa-caret-down"><MdKeyboardArrowDown/></i>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Lima</a>
                          </li>
                          <li>
                            <a href="#">Seville</a>
                          </li>
                          <li>
                            <a href="#">Lime</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Tangelos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Gallery
                  <i className="fas fa-caret-down"><MdKeyboardArrowDown/></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Yellow Oranges</a>
                  </li>
                  <li>
                    <a href="#">
                      Green Oranges
                      <i className="fas fa-caret-down"><MdKeyboardArrowDown/></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">For Health</a>
                      </li>
                      <li>
                        <a href="#">Sweet Oranges</a>
                      </li>
                      <li>
                        <a href="#">Bitter Oranges</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Dinner</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="move-right btn">
                <a href="#">Continue with Google</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
