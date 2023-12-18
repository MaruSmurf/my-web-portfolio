import React, {useState, useEffect} from 'react';
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();

            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (

        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="section-typeface">
               Portfolio
            </div>
            <a
                className={`nav-hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav-hamburger-line"></span>
                <span className="nav-hamburger-line"></span>
                <span className="nav-hamburger-line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
            <ul className="section-subtitle">
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        to="heroSection"
                        className="navbar-content">

                        About</Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"

                        to="skills"
                        className="navbar-content">

                        Skills</Link>
                    </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"

                        to="projects"
                        className="navbar-content">
                        Projects</Link>
                    </li>
                <li>
                    <a
                        href="mailto: marija.aks@seznam.cz/"
                        className="navbar-content"
                    >
                        <img src="../image/email.png" width={32} height={32}></img>
                    </a></li>

            </ul>
        </div>
        </nav>
    )

}
