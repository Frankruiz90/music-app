import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getDataUser } from "../../../selectors/getDataUser";
import './navBar.scss';

export const NavBar = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setTimeout(() => {
      let token = window.localStorage.getItem("token");
      if (token) {
        const getUserData = async () => {
          const { data } = await getDataUser(token);
          const { display_name } = data;
          setUser(display_name);
        };
        getUserData();
      }
    }, 100);
  });

  const logout = (e) => {
    window.localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <figure className="navbar-image text-center d-flex">
          <img src='/assets/logo-spotify.png' className='elevation-3'/>
        </figure>
        </a>
        <button
          className="navbar-toggler order-3"
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
          <div className="navbar-nav text-end">
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
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <NavLink className="nav-item nav-link btn" onClick={logout} to="/">
              Logout
            </NavLink>
          </ul>
        </div>
        </div>
            <span className="nav-item nav-link text-info">{user}</span>
      </div>
    </nav>
  );
};

export default NavBar;
