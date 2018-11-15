import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <nav className={this.props.active ? 'visible' : ''} id="menu">
        <a onClick={this.props.close} href="#menu" class="close" ></a>
        <ul className="links">
          <li><a href="index.html" onClick={ e => this.props.handleClick(e)}>Logout</a></li>
          <li><a href="#four">Donate</a></li>
          <li><a href="#three">Shop</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;