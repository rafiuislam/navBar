import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, socials } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
    const [showNav, setNavLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;

        if (showNav) {
            linksContainerRef.current.style.height = `${linkHeight}px`;
        } else {
            linksContainerRef.current.style.height = `0px`;
        }
    }, [showNav]);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" />
                    <button
                        className="nav-toggle"
                        onClick={() => setNavLinks(!showNav)}
                    >
                        <FaBars />
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ul className="social-icons">
                    {socials.map((social) => {
                        const { id, url, icon } = social;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
