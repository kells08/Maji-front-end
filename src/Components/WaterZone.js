import React, { Component } from 'react';
import Banner from './WaterZone/Banner'
import Nav from './WaterZone/Nav'
import Map from './WaterZone/Map'
import WaterLocForm from './WaterZone/WaterLocForm'

class WaterZone extends Component {
  render() {
    return (
      <div >
        <p> -- WaterZone</p>
        <Banner />
        <Nav />
        <Map />
        <WaterLocForm />
        <p> -- end WaterZone</p>

      </div>

    );
  }
}

export default WaterZone;