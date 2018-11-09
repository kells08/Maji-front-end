import React, { Component } from 'react';
import Banner from './WaterZone/Banner'
import Map from './WaterZone/Map'
import WaterLocForm from './WaterZone/WaterLocForm'

class WaterZone extends Component {

  state = {
    water_locations: [],
    clicked: false,
    currentMarker: null,
    selectedMarker: null
  }

  componentDidMount() {
    const token = localStorage.token
    fetch('http://localhost:3000/water_locations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        water_locations: data
      }))
  }

  //active storage post request:
  saveWaterLoc = ({geolocation, pluscode, city, country, details, active, hours}) => {
    const token = localStorage.token
    fetch('http://localhost:3000/water_locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify ({
        water_location: {
          geolocation, 
          pluscode,
          city,
          country,
          details,
          active,
          hours
        }
      })
    })
    .then(resp => resp.json())
    .then(new_water_location => 
      this.setState({
        water_locations: [ ...this.state.water_locations, new_water_location ],
        selectedMarker: null
      }))
  }

  // updateAllWaterLocs = allWaterLocs => {
  //   this.setState({
  //     currentMarker: null,
  //     selectedMarker: null,
  //     water_locations: allWaterLocs
  //   })
  // }

  selectMarker = (marker) => {
    console.log("marker selected", marker.target)
    this.setState({selectedMarker: marker, clicked:!this.state.clicked})
  }

  render() {
    console.log("water_locations", this.state.water_locations)  
    return (
      <div>
      <div style={{border:"2px solid red"}}>
        <Banner />
          <Map waterlocs={this.state.water_locations} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          selectMarker={this.selectMarker}/>
          </div>
        <WaterLocForm water_locations={this.state.water_locations} saveWaterLoc={this.saveWaterLoc} 
        selectedMarker={this.state.selectedMarker} />
      </div>
    );
  }
}

export default WaterZone;