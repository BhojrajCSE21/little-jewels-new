import React, { useState } from "react";
import EventGallery from "./pages/Gallery/EventGallery";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleHoverGallery = () => setIsGalleryDropdownOpen(true);
  const handleLeaveGallery = () => setIsGalleryDropdownOpen(false);

  const handleHoverAbout = () => setIsAboutDropdownOpen(true);
  const handleLeaveAbout = () => setIsAboutDropdownOpen(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="lj-logo" src="/Home_Images/lj-logo.png" />
      </Link>
      <div className={"menu"} onClick={handleClick}>
        <i
          className={
            click ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-xl"
          }
        />
      </div>
      <ul className={click ? "open" : ""}>
        <li>
          <NavLink to="/home" onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverAbout}
            onMouseLeave={handleLeaveAbout}
            className="nav-link"
          >
            About Us
            <i className="fa-solid fa-angle-down" />
            {isAboutDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/about/vision&mission" onClick={closeMobileMenu}>
                  Vision & Mission
                </Link>
                <Link to="/about/director-message" onClick={closeMobileMenu}>
                  Director Message
                </Link>
                <Link to="/about/management" onClick={closeMobileMenu}>
                  Management
                </Link>
                <Link to="/about/teams" onClick={closeMobileMenu}>
                  Team Little Jewels
                </Link>
                <Link to="/about/testimonials" onClick={closeMobileMenu}>
                  Testimonials
                </Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverGallery}
            onMouseLeave={handleLeaveGallery}
            className="nav-link"
          >
            Gallery
            <i className="fa-solid fa-angle-down" />
            {isGalleryDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/gallery/events" onClick={closeMobileMenu}>
                  Events
                </Link>
                <Link to="/gallery/celebrations" onClick={closeMobileMenu}>
                  Celebrations
                </Link>
                <Link to="/gallery/achievements" onClick={closeMobileMenu}>
                  Achievements
                </Link>
                <Link to="/gallery/media" onClick={closeMobileMenu}>
                  Media
                </Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/academics" onClick={closeMobileMenu}>
            Academics
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMobileMenu}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/badjate-group" onClick={closeMobileMenu}>
            Badjate Group
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
