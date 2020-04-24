import React from "react";
import {  Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/">Main</Link>
            <Link to="/Profile">Profile</Link>
        </div>
    )
};

export default Navbar