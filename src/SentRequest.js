import React, { Component } from "react";


class SentRequest extends Component {
    constructor(){ 
    super()
    this.state ={
        username: "housni",
        date: 1984 ,
        content: "hello"
    };
};
    render() {
        return (
            <div className="sent-request">
                <div className="sent-request-bar">
                    <p>Sent Requests</p>
                </div>

                <div className="requests-box">
            <div>{this.username}</div>
                    
                </div>
            </div>
        )
    }

}

export default SentRequest;