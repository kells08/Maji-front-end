import React, { Component } from 'react';
import PaypalButton from './PaypalButton';

class Cart extends Component {

  state = {
    cart: [],
    purchased: false,
    prices: []
  }

  checkout = () => {
    this.setState({
      cart: [],
      purchased: true
    })
  }

  getPrices = () => {
    console.log(this.state.cart)
    let itemsInCart = this.state.cart
    itemsInCart.map(itemInCart => {
      //console.log("items in cart", itemInCart)
      this.setState({
        prices: itemInCart.price
      }) 
    })
    console.log("prices", this.state.prices)
    //this.state.prices.reduce()
  }

  componentDidMount() {
    const token = localStorage.token;
    fetch('http://localhost:3000/cart_items/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => 
      // console.log(data)
      this.setState({
        cart: data,
        purchased: false
      }, () => this.getPrices()) 
    )
  }

  //then .reduce to get total in cart

  render() {
   // {cart.map(item => {
    return (
      <div>
        <h3>Cart</h3>
        <p>Total: $</p>
        <PaypalButton /><br/>
      </div>
      )
    }
}

export default Cart;