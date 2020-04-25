import React, { Component } from "react";
import "./userProfile.css";
import "./meme.jpg";

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                id: 3,
                name: "undefined user name",
                email: "undefined email",
                points: 0,
                average_rating: "0"
            }
        }
    };
   
    componentWillMount() {
        let userid = this.state.data.id;
        fetch(`http://localhost:5000/users/${userid}`)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ data : responseJson })
            })
            .catch((error) => {
              console.error(error);
            });
    } 

    render() {
        return (
            <>
                <div className="userProfile">
                    <div className="myProfile-bar">
                        <p>My Profile</p>
                    </div>
                    <div className="infos">
                        <img src="meme.jpg" alt="image user" />
                        <div>
                            <div className="userName">{this.state.data.name}</div>

                            <div className="email">{this.state.data.email}</div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}





export default UserProfile;