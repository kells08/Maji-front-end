import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
    user: {
      name: "",
      username: "",
      password: "",
      phone: "",
      email: "",
      street: "",
      city: "",
      state: "",
      country: "",
      postcode: ""
    },
    loggedIn: false,
    currentUser: {}
  }

  login = (username, password) => {
    localStorage.clear()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": username,
          "password": password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem('token', data.jwt)
      this.setState({ user: data.user })
    })
  }

  

  handleData = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    if(localStorage.token) return (
      <Redirect 
        to = {
          {
            pathname:"/app",
            history: this.props.history
          }
        }
      />
    )
    return (
      <div style={{border:"2px solid green"}}>
        <h2>Welcome!</h2>
        <h3>Please Login:</h3>
        <input type="text" name="username" onChange={this.handleData}/><br/>
        <input type="text" name="password" onChange={this.handleData}/>
        <button onClick={() => this.login(this.state.username, this.state.password)}>Submit</button>
      </div>
    );
  }
}

export default Login;