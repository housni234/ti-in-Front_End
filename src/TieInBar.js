import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class TieInBar extends Component {
  render() {
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
          {""}Tie_In{""}
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
