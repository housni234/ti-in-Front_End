import React, {Component} from "react";
import UserProfile from "./UserProfile";
import SentRequest from "./SentRequest";

function MyProfile() {
    return (
        <div className="profile-component">
            <UserProfile/>
            <SentRequest/>
        </div>
    )
}




export default MyProfile;