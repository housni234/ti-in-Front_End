import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class TieInBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="sidebar tie-in base">
                    <h1>TIE-IN</h1>
                    <div className="bar-container">
                        <div className="links-container">
                            <Link to="/Profile">Profile</Link>
                            <Link to="">Services</Link>
                        </div>
                    </div>
                    </div>
                </div>
                )
            }
        };
        
export default TieInBar;