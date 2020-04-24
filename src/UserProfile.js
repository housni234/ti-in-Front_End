import React, { Component } from "react";
import "./userProfile.css";
import "./meme.jpg";

class UserProfile extends Component {
     userData = {
        userName: "housni",
        email: "housni@gmail.com"
    };
    render() {
        return (
            <>
                <div className="userProfile">
                    <div className="myProfile-bar">
                        <p>My Profile</p>
                    </div>
                    <div className="infos">
                        <img src="meme.jpg" />
                        <div>
                            <div className="userName">{this.userData.userName}</div>
                            <div>Profession</div>
                            <div className="email">{this.userData.email}</div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}





export default UserProfile;