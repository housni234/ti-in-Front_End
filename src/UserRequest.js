import React, { Component } from "react"
import "./index.css";


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
        fetch('http://localhost:5000/services', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.state),
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
        return (
            <div>
                <div className="box box__big base">
                    <form id="submitForm" onSubmit={this.handleSubmit}>
                        <label >Submit Request</label>
                        <br/>
                   <input type="text" name="submit-inputText" placeholder="type here" onChange={this.handleInputChange} value={this.state.inputText} />
                        
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    {this.state.savedTexts.map(savedText => {
                        return ( 
                            <div className="savedRequest">
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