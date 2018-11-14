import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import SignupForm from './SignupForm'

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
    clickedSignup: false
  }

  login = () => {
    console.log(this.state)
    localStorage.clear()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": this.state.user.username,
          "password": this.state.user.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if(data.jwt) {
        localStorage.setItem('token', data.jwt)
        this.setState({ 
          user: {},
          loggedIn: true 
        })
      }
      else {
        //localStorage.token = "undefined"
        window.alert("Invalid credentials. Please try again!")
      }
    })    
  }

  logout = (username) => {
    localStorage.clear()
    this.setState({
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
      clickedSignup: false
    })
  }
  

  handleData = (e) => {
    this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value} })
  }

  createUser = () => {
    this.setState({
      clickedSignup: !this.state.clickedSignup
    })
  }

  saveUser = (e) => {
    const token = localStorage.token
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify ({
        "name": this.state.user.name,
        "username": this.state.user.username,
        "password": this.state.user.password,
        "phone": this.state.user.phone,
        "email": this.state.user.email,
        "street": this.state.user.street,
        "city": this.state.user.city,
        "state": this.state.user.state,
        "country": this.state.user.country,
        "postcode": this.state.user.postcode
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        user: data,
        clickedSignup: false
      })
    })
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
      <div>
      {this.state.clickedSignup ? <SignupForm saveUser={this.saveUser} createUser={this.createUser} handleSignup={this.handleData}/> : 
        <div style={{border:"2px solid green"}}>
          <div>
            <h2>Welcome!</h2>
            <h3>Please Login:</h3>
            <input type="text" name="username" placeholder="username" onChange={this.handleData}/><br/>
            <input type="text" name="password" placeholder="password" onChange={this.handleData}/><br/>
            <button onClick={() => this.login()}>Submit</button>
          </div>
          <br/>
          <div>
            <h3 onClick={this.createUser}>No account? Signup!</h3>
          </div>
        </div>}
      </div>
    );
  }
}

export default Login;