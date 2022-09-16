import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      {/* <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label> */}
      {/* <label for="active" class="close"></label> */}
      {/* <div className="wrapper">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sports">Sports</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div> */}
      <div className="navLinks">
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/restaurants">Restaurants</Link>
        </li>

        <li className="navLink">
          <Link to="/friends">Friends</Link>
        </li>
      </div>
    </nav>
  );
}
