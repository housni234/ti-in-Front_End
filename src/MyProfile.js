import React, {Component} from "react";
import UserProfile from "./UserProfile";
import SentRequest from "./SentRequests";

function MyProfile({ userId }) {
    return (
        <div className="profile-component">
            <UserProfile userid={userId} />
            <SentRequest/>
        </div>
    )
}




export default MyProfile;
