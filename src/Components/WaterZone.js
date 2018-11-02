import React, { Component } from 'react';
import Banner from './WaterZone/Banner'
import Nav from './WaterZone/Nav'
import Map from './WaterZone/Map'
import WaterLocForm from './WaterZone/WaterLocForm'

class WaterZone extends Component {
  render() {
    return (
      <div style={{border:"2px solid red"}}>
        <p> -- WaterZone</p>
        <Banner />
        <Nav />
        <Map  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
        <WaterLocForm />
      </div>

    );
  }
}

export default WaterZone;