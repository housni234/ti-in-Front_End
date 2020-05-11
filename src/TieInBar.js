import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class TieInBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar tie-in base">
        <br />
          <br />
          <img
            src="TieIn.png"
            width="50px"
            height="50px"
            className="logo"
            alt="logo"
          />{"TieIn"}
          <br />
          <h1>Good Neighbour</h1>
          <div className="bar-container">
            <div className="links-container">
              <Link to="/Profile">Profile</Link>
            </div>s
          </div>
        </div>
      </div>
    );
  }
}

export default TieInBar;
