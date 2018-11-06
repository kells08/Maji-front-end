import React, { Component } from 'react';

class Product extends Component {

  render() {
    const product = this.props.product
    return (
      <div style={{border:"1px solid black", width:"32%", float:"left"}}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h6>${product.price}</h6>
          <button>Buy</button><br/><br/>
      </div>

    );
  }
}

export default Product;