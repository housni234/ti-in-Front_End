import React, { Component } from "react"


class UserRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            savedTexts: []
        }

    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            savedTexts: this.state.savedTexts.concat([this.state.inputText])
        })
    }

    handleInputChange = (event) => {
        this.setState({
            inputText: event.target.value
        });
    };
    
    render() {
        return (
            <div>
                <div className="box box__big base">
                    <form id="submitForm" onSubmit={this.handleSubmit}>
                        <label >Submit Request
                   <input type="text" name="submit-inputText" placeholder="type here" onChange={this.handleInputChange} value={this.state.inputText} />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    {this.state.savedTexts.map(savedText => {
                        return ( 
                            <div>
                                {savedText}
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
   
};


export default UserRequest; 