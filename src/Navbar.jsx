import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="Navbar">
        <div className="links">
          {/* Hamburger button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          {/* Nav Links */}
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <NavLink className="logo" to="/NewsMonkey">
                NewsMonkey
              </NavLink>
            </li>
            <li><NavLink className="link" to="/">Home</NavLink></li>
            <li><NavLink className="link" to="/business">Business</NavLink></li>
            <li><NavLink className="link" to="/entertainment">Entertainment</NavLink></li>
            <li><NavLink className="link" to="/health">Health</NavLink></li>
            <li><NavLink className="link" to="/nation">Nation</NavLink></li>
            <li><NavLink className="link" to="/science">Science</NavLink></li>
            <li><NavLink className="link" to="/world">World</NavLink></li>
            <li><NavLink className="link" to="/technology">Technology</NavLink></li>
            <li><NavLink className="link" to="/sport">Sports</NavLink></li>
            <li><NavLink className="link" to="/about">About</NavLink></li>
            <li><NavLink className="link" to="/contactus">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>

      {/* 👇 Page content renders here */}
      <Outlet />
    </>
  );
}
