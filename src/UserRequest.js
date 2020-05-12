import React, { Component } from "react"
import "./index.css";


class UserRequest extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
            savedTexts: [],
            userId: 1,
            name: "name",
            receiver_id: 2,
            contentList: ["testcontent"]

        }
    };

    componentDidMount() {
       // let content = this.state.content;
        fetch(`http://localhost:5000/content`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ contentList:responseJson })
                console.log(this.state.contentList)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //  componentDidMount() {
    //    let userId = this.state.id;
    //  fetch(`http://localhost:5000/users/${userId}`)
    //    .then((response) => response.json())
    //       .then((responseJson) => {
    //         const { name } = responseJson;
    //       this.setState({ name })
    // })
    //   .catch((error) => {
    //      console.error(error);
    //  });
    //}

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            savedTexts: this.state.savedTexts.concat([this.state.inputText])
        })
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: this.state.inputText }),
        })
            .then((response) => response.json())
            .then((savedText) => {
                console.log('Success:', savedText);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    handleInputChange = (event) => {
        this.setState({
            inputText: event.target.value
        });
    };

    render() {
        const { name, contentList } = this.state;
        return (
            <div>
                <div className="box box__big base">
                    <form id="submitForm" onSubmit={this.handleSubmit}>
                        <label >Submit your request here</label>
                        <br />
                        <input type="text" name="submit-inputText" placeholder="type here" onChange={this.handleInputChange} value={this.state.inputText} />

                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    {this.state.savedTexts.map(savedText => {
                        return (
                            <div className="savedRequest">
                                {name}<br />
                                {savedText}
                            </div>
                        )
                    })}
                    <div
                        className="savedRequest">
                        {name}<br />
                       {contentList.map(contentObject => {
                           return (
                           <p>{contentObject.content}</p>
                           )
                       })} <br />
                        <form className="tie-in-btn"
                            method="post"
                            action="mailto:youremail@youremail.com" >
                            <input type="submit" value="Tie In" />
                        </form></div>
                </div>
            </div>

        )
    }

};


export default UserRequest; 