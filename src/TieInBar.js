import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

function TieInBar({ profileLink }) {
  return (
    <div className="container">
      <div className="sidebar tie-in base">
        <br />
        <img
          src="TieIn.png"
          width="35px"
          height="35px"
          className="logo"
          alt="logo"
        />
        Tie_In
        <br />
        <h1>Good</h1><h1> Neighbour</h1>
        <div className="bar-container">
          <div className="links-container">
            <Link to={profileLink}>Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TieInBar;
