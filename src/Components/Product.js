import React, { Component } from 'react';

class Product extends Component {

  state= {
    purchase: []
  } //each trxn will currently override purchase total
  //need to add each "buy" together until state is reset after some change

  buyAmount = (e) => {
    console.log("price", e.target.value)
    this.setState({
      purchase: { ...this.state.purchase, purchase: e.target.value}
    })//use this format: this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value} })
  }  //then .reduce to get total in cart

  // getPrice = () =>{
    
  // }

  render() {
    const product = this.props.product
    return (
      <div style={{border:"1px solid black", width:"33%", float:"left"}}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h6>${product.price}</h6>
          <button onClick={this.buyAmount} value={product.price}>Buy</button><br/><br/>
      </div>
    );
  }
}

export default Product;