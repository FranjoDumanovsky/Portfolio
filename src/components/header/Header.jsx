import { useState } from "react";

import "./header.css";
// import { HomeIcon, XMarkIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { BsGithub } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import ChangeTheme from "../changeTheme/ChangeTheme";

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="header">
      <nav className="nav container">
        <div href="index.html" className="nav__logo">
          &lt;FrancisDev /&gt;
        </div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="/" className="nav__link active-link">
                <BsGithub className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                <BsGithub className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                <BsGithub className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                <BsGithub className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                <BsGithub className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                <BsGithub className="nav__icon" />
                Contact
              </a>
            </li>
            <li className="nav__item">
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  <ChangeTheme
                    changeTheme={() => {
                      setDarkMode(!darkMode);
                      changeTheme(darkMode ? themes.light : themes.dark);
                    }}
                  />
                )}
              </ThemeContext.Consumer>
            </li>
          </ul>
          <div width="20px">
            <GrClose className="nav__close" onClick={() => showMenu(!Toggle)} />
          </div>
        </div>

        <HiOutlineSquares2X2
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
        />
      </nav>
    </header>
  );
};

export default Header;
