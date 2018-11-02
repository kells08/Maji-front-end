import React, { Component } from 'react';
import WaterZone from './WaterZone';
import Wrapper from './Wrapper';
import Projects from './Projects';
import Shop from './Shop'

class MainContainer extends Component {
  render() {
    return (
      <div style={{border:"2px solid blue"}}>
        <p >** Main Container</p>
        <WaterZone />
        <Wrapper />
        <Projects />
        <Shop />
      </div>
    );
  }
}

export default MainContainer;
