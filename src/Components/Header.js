import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div style={{border:"2px solid green"}}>
        <h1>Maji</h1>
        <Nav handleClick={this.props.handleClick}/>
      </div>
    );
  }
}

export default Header;