import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <div >
          <button onClick={ e => this.props.handleClick(e)}>Logout</button>
      </div>

    );
  }
}

export default Nav;