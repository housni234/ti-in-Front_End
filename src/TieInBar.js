import React, { Component } from "react";
import "./main.css";


class TieInBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="sidebar tie-in base">
                    <h1>TIE-IN</h1>
                    <div className="bar-container">
                        <div className="links-container">
                            <a href="">Profile</a>
                            <a href="">Services</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TieInBar;