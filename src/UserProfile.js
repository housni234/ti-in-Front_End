import React, { Component } from "react";
import "./userProfile.css";
import meme from "./meme.jpg";

class UserProfile extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                id: 2,
                name: "undefined user name",
                email: "undefined email",
                isInEditMode: false
            },
        text:"Edit"
        }
        this.newName = "";
        this.newEmail = "";
    };

    changeEditMode=() =>  {
       this.setState({ isInEditMode: !this.state.isInEditMode })
       let text=this.state.isInEditMode ? "Edit" : "Save";
       this.setState({text:text})

    };

    componentDidMount() {
        let userid = this.state.data.id;
        fetch(`http://localhost:5000/users/${userid}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        return (

            <div className="userProfile">
                <div className="myProfile-bar">
                    <p>My Profile</p>
                </div>
                <button className="edit-save-btn" onClick={this.changeEditMode}>{this.state.text}</button>

                <div className="infos">
                    <img src={meme} alt="image user" />
                    <div>
                        {!this.state.isInEditMode ? (
                            <div className="userName">{this.state.data.name}</div>
                        ) : (
                                <input type="text" defaultValue={this.state.data.name} ref={node => { this.newName = node }}/>

                            )}
                            {!this.state.isInEditMode ? (
                        <div className="email">{this.state.data.email}</div>
                        ) : (
                            <input type="text" defaultValue={this.state.data.email} ref={node => { this.newEmail = node }} />
                        )}
                    </div>

                </div>
            </div>


        )
    }
}





export default UserProfile;
