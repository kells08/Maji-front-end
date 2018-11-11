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
    })//try  this format: this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value} })
  }  //then .reduce to get total in cart

  // getPrice = () =>{
    
  // }

  render() {
    const product = this.props.product
    return (
      <div>
				<div className="box">
          <div className="content">	
            <div className="image fit">
              <img src="images/pic02.jpg" alt="" />
            </div>
            <hr/>
            <header className="align-center">
              <h3>{product.title}</h3>  
              <h4>${product.price}</h4>
            </header>
            <p>{product.description}</p>
            <button onClick={this.buyAmount} value={product.price} className="button special scrolly">Buy</button>
          </div>
        </div>
			</div>
    );
  }
}

export default Product;