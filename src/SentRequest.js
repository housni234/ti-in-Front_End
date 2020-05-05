import React, { Component } from "react";
import "./userProfile.css";
import ProfileField from "./ProfileField";


class SentRequest extends Component {
    constructor() {
        super()
        this.state = {
            username: "housni",
            start_date: 1984,
            end_date:2020,
            content: "hello I need someone to walk my dog",
            isInEditMode: false
        };
    };

    componentDidMount() {
        let userid = this.state.username;
        fetch(`http://localhost:5000/services/${userid}`)
            .then((response) => response.json())
            .then((responseJson) => {
                const { receiver_id, content, start_date, end_date } = responseJson;
                this.setState({ receiver_id, content, start_date, end_date })
            })
            .catch((error) => {
                console.error(error);
            });
    };

    changeEditMode = () => {
        if (this.state.isInEditMode) {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: "testcontent" })
            };
            fetch('http://localhost:5000/services', requestOptions);

        }
        this.setState({ isInEditMode: !this.state.isInEditMode });

    };

    updateContent = e => {
        this.setState({content: e.target.value})

    }

    render() {
        const {content} = this.state;
        return (
            <div className="sent-request">
                <div className="sent-request-bar">
                    <p>Sent Requests</p>
                </div>

                <div className="requests-box">
                    <div>{this.state.username}</div>
                    <ProfileField value={content} onChange={this.updateContent} isEditing={this.state.isInEditMode} />
                    
                    <div className="requests-btns">
                        <button className="edit-btn" onClick={this.changeEditMode}>{this.state.isInEditMode ? "Save" : "Edit"}</button>
                        <button className="delete-btn" >Delete</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default SentRequest;