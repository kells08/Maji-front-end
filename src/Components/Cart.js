import React, { Component } from 'react';
import PaypalButton from './PaypalButton';

class Cart extends Component {

  state = {
    purchased: false,
    prices: [],
    total: []
  }

  checkout = () => {
    this.setState({
      purchased: true
    })
  }

  total = () => {
    return this.props.cartItems.reduce( (total, item) => {
      total = total + item.price
      return total
    }, 0)
  }

  render() {
   // {cart.map(item => {
     console.log(this.props.cartItems)
    return (
      <div>
        <img src="/cart.png" alt="cart"/>
        <hr />
        {this.props.cartItems.map(itemInCart => {
          return (
            <div>
              <p>{itemInCart.item.title} ${itemInCart.price}</p>
              <img onClick={e => this.props.handleDelete(itemInCart.id)} src="/trashcan.png" alt="delete" />
              
            </div>
          )
          })
        }
        <hr/>
        <h3>Total: ${this.total()}</h3>
        <PaypalButton total={this.total()}/><br/>
      </div>
    )
  }

}

export default Cart;