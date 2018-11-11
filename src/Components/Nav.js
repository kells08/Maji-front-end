import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <div>
          <h4 onClick={ e => this.props.handleClick(e)}>Logout</h4>
          <h4>Donate</h4>
          <h4>Shop</h4>
          <h4>Cart</h4>
      </div>

    );
  }
}

export default Nav;