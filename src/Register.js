import React, { Component } from 'react';
import "./index.css";


export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : '',
      email : '',
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
    fetch('http://localhost:5000/reg', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/main');
        console.log('a user has signed up!')

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error please try again');
    });
  }

render() {
  const { name, email, password } = this.state;
  return (
    <div>
    <h1 className="logup_page">Sign up below</h1>
    <form onSubmit={this.onSubmit}>
      )}
      <input
      className="nameup"
        name="name"
        id="name"
        placeholder="name"
        required="required"
        type="name"
        value={name}
        onChange={this.handleInputChange}
      ></input>
      <input
      className="emailup"
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
      
      className="passwordup"
        type="password"
        id="yourLoginPassword"
        placeholder="password"
        required="required"
        name="password"
        value={password}
        onChange={this.handleInputChange}
      ></input>
      <br />
      
      <button type="submit" className="logup-btn">Sign up</button>
      <br />
      <br />
      
    </form>
    

    </div>
  
  );
}
}