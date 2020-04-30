import React, { Component } from "react";
import "./userProfile.css";
import meme from "./meme.jpg";
import ProfileField from "./ProfileField"

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

    updateName = e => {
        this.setState({
            data: {
                ...this.state.data,
                name: e.target.value
            }
        });
    };

    updateEmail = e => {
        this.setState({
            data: {
                ...this.state.data,
                email: e.target.value
            }
        });
    }

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
        const { name, email } = this.state.data;

        return (

            <div className="userProfile">
                <div className="myProfile-bar">
                    <p>My Profile</p>
                </div>
                <button className="edit-save-btn" onClick={this.changeEditMode}>{this.state.text}</button>

                <div className="infos">
                    <img src={meme} alt="image user" />
                    <div>
                        <ProfileField value={name} onChange={this.updateName} isEditing={this.state.isInEditMode} />
                        <ProfileField value={email} onChange={this.updateEmail} isEditing={this.state.isInEditMode} />
                    </div>
                </div>
            </div>
        )
    }
}





export default UserProfile;
