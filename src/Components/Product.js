import React, { Component } from 'react';

class Product extends Component {

  state = {
    purchase: "",
    selectedItems: []
  } //each trxn will currently override purchase total
  //need to add each "buy" together until state is reset after some change

  // buyAmount = (e) => {
  //   console.log("price", e.target.value)
  //   this.setState({
  //     purchase: { ...this.state.purchase, purchase: e.target.value}
  //   })
  // }  

  render() {
    //console.log("products", this.props)
    const item = this.props.item
    return (
      <div>
				<div className="box">
          <div className="content">	
            <div className="image fit">
              <img src={item.image_url} alt=":(" />
            </div>
            <hr/>
            <header className="align-center">
              <h3>{item.title}</h3>  
              <h4>${item.price}</h4>
            </header>
            <p>{item.description}</p>
            <button onClick={e => this.props.addCartItem(item, item.price)} value={item.price} className="button special scrolly">Buy</button>
          </div>
        </div>
			</div>
    );
  }
}

export default Product;