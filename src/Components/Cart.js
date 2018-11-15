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
        <br/>
        <img src="/cart.png" alt="cart"/>
        <hr />
        {this.props.cartItems.map(itemInCart => {
          return (
          	<section id="four" class="wrapper style2 cart">
				      <div class="inner">
                <div>
					    	 <div class="box">
                   <div class="content cart">
                      <header class="align-center-cart">
                        <h4>{itemInCart.item.title}  ${itemInCart.price}</h4>
                        {/* <a className="icon fa-trash-o"></a> */}
                        <img className="trash-icon" onClick={e => this.props.handleDelete(itemInCart.id)} src="/trashcan.png" alt="delete" />
                        <br/><br/>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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