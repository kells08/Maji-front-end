import React, { Component } from 'react';
import WaterZone from './WaterZone';
import Wrapper from './Wrapper';
import DonateForm from './DonateForm';
import Projects from './Projects';
import Shop from './Shop';
import Cart from './Cart';
import {Redirect} from 'react-router-dom'

class MainContainer extends Component {


  // getProductValue = (e) => {
  //   console.log("buyButton", e.target.value)

  // }

  render() {
   if(!localStorage.token) return (
      <Redirect 
        to = {
          {
            pathname:"/login",
            history: this.props.history
          }
        }
      />
   )
    return (
      <div>
        <WaterZone />
        <Wrapper />
        <DonateForm />
        <Shop buyAmount={this.buyAmount}/>
        <Projects buyAmount={this.buyAmount}/>
        <Cart />
      </div>
    );
  }
}

export default MainContainer;
