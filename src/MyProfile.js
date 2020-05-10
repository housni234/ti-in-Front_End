import React, {Component} from "react";
import UserProfile from "./UserProfile";
import SentRequest from "./SentRequests";

function MyProfile() {
    return (
        <div className="profile-component">
            <UserProfile/>
            <SentRequest/>
        </div>
    )
}




export default MyProfile;