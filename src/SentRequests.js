import React, { Component } from "react";
import "./userProfile.css";

import SentRequest from "./SentRequest";


class SentRequests extends Component {
    constructor() {
        super()
        this.state = {
            requests: [
            ],
            editIndex: null
        };
    };

    componentDidMount() {
        let receiver_id = this.state.requests.receiver_id;
        fetch(`http://localhost:5000/services/4/content`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({ requests: responseJson});
                console.log(this.state)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    changeEditMode = () => {
   //     if (this.state.isInEditMode) {
     //       const requestOptions = {
       //         method: 'PUT',
         //       headers: { 'Content-Type': 'application/json' },
           //     body: JSON.stringify({ content: this.state.content })
         //   };
           // fetch('http://localhost:5000/services', requestOptions);

       // }
        //this.setState({ isInEditMode: !this.state.isInEditMode });

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