import React, { Component } from 'react';
import PaypalButton from './PaypalButton';

class Cart extends Component {

  state = {
    cart: [],
    purchased: false,
    prices: [],
    total: []
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
    let prices = []
    let total = 0
    for (let i=0; i<itemsInCart.length; i++) {
      prices.push(itemsInCart[i].price)
    } console.log(prices)
      this.setState({
        prices: prices
      })
    for (let j=0; j<prices.length; j++) {
      total = total + prices[j]
    } console.log(total)
      this.setState({
        total: total
      })
    // itemsInCart.map(itemInCart => {
    //   console.log("prices in cart", itemInCart.price)
    //   let prices = itemInCart.price
      
    // console.log("prices", this.state.prices)
    // //this.state.prices.reduce()
    // }, this.setState({
    //     prices: [...this.state.prices, prices]
    //   }))
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
  
  render() {
   // {cart.map(item => {
    return (
      <div>
        <img src="../../public/cart.jpg" alt="cart"/>
        <h3>Cart</h3>
        {this.state.cart.map(itemInCart => {
          return <p>{itemInCart.item_id} ${itemInCart.price}</p>
          })
        }
        <hr/>
        <h3>Total: ${this.state.total}</h3>
        <PaypalButton total={this.state.total}/><br/>
      </div>
    )
  }

}

export default Cart;