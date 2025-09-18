import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
       

        <div className="links">
          <ul>
            <li><NavLink className="logo" to="/NewsMonkey">NewsMonkey</NavLink></li>
            <li>
              <NavLink className="link" to="/">Home</NavLink>
            </li>
              <li>
              <NavLink className="link" to="/business">Business</NavLink>
            </li>
              <li>
              <NavLink className="link" to="/entertainment">Entertainment</NavLink>
            </li>
            <li><NavLink className="link" to="/health">Health</NavLink></li>
            <li>
              <NavLink className="link" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contactus">Contact Us</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/nation">Nation</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/science">Science</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/world">World</NavLink>
            </li>
              <li>
              <NavLink className="link" to="/technology">Technology</NavLink>
            </li>
              <li>
              <NavLink className="link" to="/sport">Sports</NavLink>
            </li>
            
          </ul>
        </div>
      </div>

      {/* 👇 this is where the page will show */}
      <Outlet />
    </>
  );
}
