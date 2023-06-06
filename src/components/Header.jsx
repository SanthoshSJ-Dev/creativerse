import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { MdClear, MdKeyboardArrowRight } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <a onClick={() => navigate(`/`)} className="logo">
            Creativerse
          </a>
          <div className={`menu_items ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav_links">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Learn</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
            <div className="login_signup">
              <a className="secondary_otline_btn" href="">
                Login
              </a>
              <a className="primary_btn" href="">
                Create an Account
              </a>
            </div>
          </div>
          <div className="menu_icon" onClick={toggleMenu}>
            {isMenuOpen ? <MdClear /> : <CgMenuRight />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
