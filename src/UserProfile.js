import React, { Component } from "react";
import "./userProfile.css";
import ProfileField from "./ProfileField"

class UserProfile extends Component {
    constructor() {
        super()

        this.state = {
            name: "undefined user name",
            email: "undefined email",
            points: 0,
            average_rating: 0,
            isInEditMode: false
        };
    };



    changeEditMode = () => {
        if (this.state.isInEditMode) {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: "testName01", email: "testEmail01", id: this.state.id })
            };
            fetch('http://localhost:5000/users', requestOptions);

        }
        this.setState({ isInEditMode: !this.state.isInEditMode });

    };

    updateName = e => {
        this.setState({
            name: e.target.value
        });
    };

    updateEmail = e => {
        this.setState({
            email: e.target.value
        });
    };

    componentDidMount() {
        let { userid } = this.props;
        fetch(`http://localhost:5000/users/${userid}`)
            .then((response) => response.json())
            .then((responseJson) => {
                const { name, email, points, average_rating } = responseJson;
                this.setState({ name, email, points, average_rating })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { name, email } = this.state;

        return (

            <div className="userProfile">
                <div className="myProfile-bar bar-name">
                    <p>My Profile</p>
                </div>
                <button className="edit-save-btn" onClick={this.changeEditMode}>{this.state.isInEditMode ? "Save" : "Edit"}</button>
                <div className="infos">
                    <div className="userName">
                        <ProfileField value={name} onChange={this.updateName} isEditing={this.state.isInEditMode} />
                    </div>
                    <div>rating: {this.state.average_rating}</div>
                <div className="points">
                <div>Points:{this.state.points}</div>
                </div>
                    <div className="email">
                        <ProfileField value={email} onChange={this.updateEmail} isEditing={this.state.isInEditMode} />
                    </div>
                </div>
            </div>
        )
    }
}





export default UserProfile;
