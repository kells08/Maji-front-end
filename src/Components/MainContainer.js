import React, { Component } from 'react';
import WaterZone from './WaterZone';
import Wrapper from './Wrapper';
import DonateForm from './DonateForm';
import Projects from './Projects';
import Shop from './Shop';
import {Redirect} from 'react-router-dom'

class MainContainer extends Component {
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
      <div style={{border:"2px solid orange"}}>
        <WaterZone />
        <Wrapper />
        <DonateForm />
        <Shop />
        <Projects />
      </div>
    );
  }
}

export default MainContainer;
