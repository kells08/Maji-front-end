import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <div>
          <h3 onClick={ e => this.props.handleClick(e)}>Logout</h3>
          <h3>Donate</h3>
          <h3>Shop</h3>
          <h3>Cart</h3>
      </div>

    );
  }
}

export default Nav;