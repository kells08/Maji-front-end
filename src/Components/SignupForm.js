import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
      <div >
          <p>Signup for an account:</p>
          <input type="text" placeholder="name"/><br/>
          <input type="text" placeholder="username"/><br/>
          <input type="text" placeholder="password"/><br/>
          <input type="text" placeholder="phone"/><br/>
          <input type="text" placeholder="email"/><br/>
          <input type="text" placeholder="street"/><br/>
          <input type="text" placeholder="city"/><br/>
          <input type="text" placeholder="state"/><br/>
          <input type="text" placeholder="country"/><br/>
          <input type="text" placeholder="postcode"/><br/>
          <button onClick={this.props.saveUser}>Submit</button>
          <button onClick={this.props.createUser}>Cancel</button>
      </div>

    );
  }
}

export default SignupForm;