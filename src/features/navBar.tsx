import React, { useState } from "react";
import logo from "../images/Benny.png";
import haburger from "../images/Hamburger.png";

export const NavBar: React.FC = () => {
    const [setActive, setActiveState] = useState("");

    function toggleHamburger() {
        setActiveState(setActive === "" ? "active" : "");
    }

    return (
        <nav className="nav-bar">
            <div className="logo-container">
                <a href="/" id="logo">
                    <img src={logo} alt="Home" />
                </a>

                <div className="hamburger-container">
                    <div
                        className={`hamburger-menu ${setActive}`}
                        onClick={toggleHamburger}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>

            <div id="navibar" className={`nav-items-container ${setActive}`}>
                <ul className="list-items">
                    <li>
                        <a className="list-items__text">About</a>
                    </li>
                    <li>
                        <a className="list-items__text">Skills</a>
                    </li>
                    <li>
                        <a className="list-items__text">Work</a>
                    </li>
                    <li>
                        <a className="list-items__text">Gallery</a>
                    </li>
                    <li>
                        <a className="list-items__text">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
