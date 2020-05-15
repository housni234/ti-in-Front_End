import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

function TieInBar({ profileLink }) {
  return (
    <div className="container">
      <div className="sidebar tie-in base">
        <br />
        <img
          src="https://lh3.googleusercontent.com/proxy/ufzV0ryl2xgcaB1VID7OTdSp91Ic2ROe0wvM-BUr_WaYLiQw739abu2BhwTxx90QbFwmXaR_jyDB4MJOJN5RBjVk16R8lh8aQLynAu2zBU4BnrfcVf3b7vAoPlhCxGjh4ArP2bkllFCzTXjjtdaiJjjy0lQhgpqCwFJdT5W5ZnDO9w"
          width="35px"
          height="35px"
          className="logo"
          alt="logo"
        />
        Tie_In
        <br />
        <h1>Good  Neighbour</h1>
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
