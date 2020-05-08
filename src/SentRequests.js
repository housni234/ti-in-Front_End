import React, { Component } from "react";
import "./userProfile.css";

import SentRequest from "./SentRequest";


class SentRequests extends Component {
    constructor() {
        super()
        this.state = {
            requests: [
                {
                    id:1,
                    username: "housni",
                    start_date: 1984,
                    end_date: 2020,
                    content: "hello I need someone to walk my dog",
                },
                {
                    id:2,
                    username: "tom",
                    start_date: 1988,
                    end_date: 2020,
                    content: "hello I need someone to walk my cat",
                }
            ],
            editIndex: null
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
                body: JSON.stringify({ content: this.state.content })
            };
            fetch('http://localhost:5000/services', requestOptions);

        }
        this.setState({ isInEditMode: !this.state.isInEditMode });

    };

    updateContent = e => {
        const { requests } = this.state;
        const request = requests[this.state.editIndex];
        request.content = e.target.value;
        this.setState({ requests: requests });
    }

    onDelete = (request) => {
       // let serviceId = this.state.content
       // const deleteOption = {
         //   method: 'DELETE',
           // headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify({ content: this.state.content })
       // };
       // fetch(`http://localhost:5000/services/${serviceId}`, deleteOption);

        const { requests } = this.state;
        this.setState({ requests: requests.filter(r => r !== request) });
    };

    render() {
        const { requests, editIndex } = this.state;
        return (
            <div className="sent-request">
                <div className="sent-request-bar">
                    <p>Sent Requests</p>
                </div>
                {
                    requests.map((request, index) => (
                        <SentRequest 
                            key={request.id} 
                            content={request.content}
                            onChange={this.updateContent}
                            isInEditMode={editIndex === index}
                            changeEditMode={() => {
                                if (editIndex === index) {
                                    this.setState({ editIndex: null });
                                } else {
                                    this.setState({ editIndex: index })
                                }
                            }}
                            onDelete={() => this.onDelete(request)}
                        />
                    ))    
                }
            </div>
        );
    }
}

export default SentRequests;