import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link" + (isActive ? " active" : "")
              }
              to="/favorites"
            >
              Favorites
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link" + (isActive ? " active" : "")
              }
              to="/artist"
            >
              Artist
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
