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
      <section id="three" className="wrapper style2">
				<div className="inner">
        <h3>Shop our products!</h3>
					<div className="grid-style">
            {this.state.products.map(product => {
              return <Product key={product.id} product={product}/> 
            })}							
          </div>
				</div>
			</section>
        
        
    );
  }
}

export default Shop;