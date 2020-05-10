import React, { Component } from 'react';
import "./index.css";


export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
        console.log('a user has signed in!')

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch((error) => {
      //console.log(error);
      //this.setState({ errorMessage: error });
      if (error.response.status === 404) {
        this.setState({ errorMessage: error.response.data });
      } else if (error.response.status === 401) {
        this.setState({ errorMessage: error.response.data });
        // console.log("request", error.request);
      } else {
        //console.log("Error", error.message);
        this.setState({ errorMessage: error });
      }
    });
};


  render() {
    const { email, password } = this.state;
    return (
      <div>
      <h1 className="login_page">Login below</h1>
      <form onSubmit={this.onSubmit}>
        {this.state.errorMessage && (
          <h3 className="error"> {this.state.errorMessage} </h3>
        )}
        <input
        className="email"
          name="email"
          id="EmailLogin"
          placeholder="email"
          required="required"
          type="email"
          value={email}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <input
        
        className="password"
          type="password"
          id="yourLoginPassword"
          placeholder="password"
          required="required"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        ></input>
        <br />
        
        <button type="submit" className="login-btn">Login</button>
        <br />
        <br />

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
      </div>
    
    );
  }
}

