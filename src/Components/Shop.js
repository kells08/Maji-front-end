import React, { Component } from 'react';
import Product from './Product'
import Project from './Project'
import Cart from './Cart'

class Shop extends Component {

  state = {
    items: [],
    cartItems: [],
    checkout: false
  }

  componentDidMount() {
    const token = localStorage.token;
    fetch('http://localhost:3000/items/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        items: data
      }) 
    )
    
    fetch('http://localhost:3000/cart_items/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        cartItems: data
      }) 
    )
  }

  addCartItem = (item, amount) => {
    const token = localStorage.token
    fetch('http://localhost:3000/cart_items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        cart_item: {
          item_id: item.id,
          price: amount
        }
      })
    })
    .then(resp => resp.json())
    .then(cartItem => {
      this.setState({
        cartItems: [ ...this.state.cartItems, cartItem]
        })
      }
    )
  }

  handleDelete = (id) => {
    const token = localStorage.token
    fetch(`http://localhost:3000/cart_items/`+ id, {
      method: 'DELETE',
      headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
      }
    })
    .then(deleteItem => {
      this.setState ({  
        cartItems: [ ...this.state.cartItems.filter(item => item.id != id)]
      })
    })
  }

  goCheckout = () => {
    this.setState({
      checkout: !this.state.checkout
    })
  }

  render() {
    let products = this.state.items.filter( item => item.category === 'product')
    let projects = this.state.items.filter( item => item.category === 'project')

    console.log("items", this.state.items)
    return (
      <div>
      <section id="three" className="wrapper style2">
				<div className="inner">
        <h3>Shop our Products!</h3>
					<div className="grid-style">
            {products.map(item => {
              return <Product addCartItem={this.addCartItem} key={item.id} item={item}/> 
            })}							
          </div>
				</div>
        <div className="inner">
        <br/>
        <h3>Contribute to our Projects!</h3>
					<div className="grid-style">
            {projects.map(item => {
              return <Project addCartItem={this.addCartItem} key={item.id} item={item}/> 
            })}							
          </div>
				</div>
        <button onClick={this.goCheckout}>Checkout</button>
			</section>
      {this.state.checkout &&
      <Cart cartItems={this.state.cartItems} handleDelete={this.handleDelete}/>
      }
   </div> 
   );
  }
}

export default Shop;