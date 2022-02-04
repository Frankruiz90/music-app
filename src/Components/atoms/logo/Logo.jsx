import React from "react";
import "./logo.scss";

export const Logo = () => {
  return (
    <div className="logo d-flex align-items-center justify-content-center">
      <figure className="logo-image text-center">
        <img src="/assets/logo-spotify.png" className="elevation-3" />
      </figure>
    </div>
  );
};
