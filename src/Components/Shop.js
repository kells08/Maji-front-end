import React, { Component } from 'react';
import Product from './Product'

class Shop extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    const token = localStorage.token;
    fetch('http://localhost:3000/products/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        products: data
      }) 
    )
  }


  render() {
    console.log("products", this.state.products)
    return (
      <div style={{border:"2px solid green"}}>
        <h3>Shop our products!</h3>
        {this.state.products.map(product => {
          return <Product key={product.id} product={product}/> 
        })}
      </div>
    );
  }
}

export default Shop;