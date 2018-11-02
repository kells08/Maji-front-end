import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div style={{border:"2px solid green"}}>
        <p>Header</p>
        <Nav />
      </div>
    );
  }
}

export default Header;