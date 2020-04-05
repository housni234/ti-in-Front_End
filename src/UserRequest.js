import React, {Component} from "react"


class UserRequest extends Component {
    constructor(props) {
        super(props); 


    }
    handleSubmit = (event) => {
        event.preventDefault()
    }
    handleInputChange = () => {

    };
    submit = () =>  {

    };
    render (){
        return (
        <div className="box box__big base">
            <form id="submitForm" onSubmit={this.handleSubmit}>
              <label for="submit-request">Submit Request</label>
              <input type="text" name="submit-request" placeholder="type here"/>
              <button onclick={this.submit}>Ti In</button>
            </form>
        </div>
        )
    }
};




export default UserRequest; 