import React, { Component } from 'react';
import PaypalButton from './PaypalButton';

class Cart extends Component {
  render() {
    return (
      <div style={{border:"2px solid blue"}}>
        <h3>Cart</h3>
        <p>Total: ${this.props.purchase}</p>
        <PaypalButton /><br/>
      </div>
    );
  }
}

export default Cart;