import React, { Component } from 'react';
import WaterZone from './WaterZone';
import Wrapper from './Wrapper';
import DonateForm from './DonateForm';
import Shop from './Shop';
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
      </div>
    );
  }
}

export default MainContainer;
