import React, { Component } from 'react';
import WaterZone from './WaterZone';
import Wrapper from './Wrapper';
import Projects from './Projects';
import Shop from './Shop'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <p>** Main Container</p>
        <WaterZone />
        <Wrapper />
        <Projects />
        <Shop />
        <p>** end Main Container</p>
      </div>
    );
  }
}

export default MainContainer;
