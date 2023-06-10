import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdClear, MdKeyboardArrowRight } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import {auth} from '../../config/firebase';

import "../../styles/Navbar.css";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav className={`${isMenuOpen ? "active" : ""}`}>
            <a onClick={() => navigate(`/`)} className="logo">
              Creativerse
            </a>
            <div className="menu_icons" onClick={toggleMenu}>
              {isMenuOpen ? (
                <MdClear color="var(--primary-color)" />
              ) : (
                <CgMenuRight color="var(--primary-color)" />
              )}
            </div>
            <ul className="nav-list">
              <li>
                <a href="#">
                  Features <MdKeyboardArrowRight size={10}/>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Feature 1</a>
                  </li>
                  <li>
                    <a href="#">
                      Feature 2 {" "}
                      <MdKeyboardArrowRight size={10}/>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Feature 2.1</a>
                      </li>
                      <li>
                        <a href="#">Feature 2.2</a>
                      </li>
                      <li>
                        <a href="#">
                          Feature 2.3 {" "}<MdKeyboardArrowRight size={10}/>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Feature 2.3.1</a>
                          </li>
                          <li>
                            <a href="#">Feature 2.3.2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Feature 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Products {" "}
                  <MdKeyboardArrowRight size={10}/>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Product 1</a>
                  </li>
                  <li>
                    <a href="#">
                      Product 2 {" "}<MdKeyboardArrowRight size={10}/>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Product 2.1</a>
                      </li>
                      <li>
                        <a href="#">Product 2.2</a>
                      </li>
                      <li>
                        <a href="#">Product 2.3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Product 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <LoginBtn auth={auth} />
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
