import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
      <div>
        <br/>
          <h3>Signup for an account:</h3>
          <input type="text" name="name" placeholder="name" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="username" placeholder="username" onChange={this.props.handleSignup}/><br/>
          <input type="password" name="password" placeholder="password" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="phone" placeholder="phone" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="email" placeholder="email" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="street" placeholder="street" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="city" placeholder="city" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="state" placeholder="state" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="country" placeholder="country" onChange={this.props.handleSignup}/><br/>
          <input type="text" name="postcode" placeholder="postcode" onChange={this.props.handleSignup}/><br/>
          <button onClick={this.props.saveUser}>Submit</button>
          <button onClick={this.props.createUser}>Cancel</button>
          <br/><br/>
      </div>

    );
  }
}

export default SignupForm;