import React, { Component } from 'react';
import Banner from './WaterZone/Banner'
import Map from './WaterZone/Map'
import WaterLocForm from './WaterZone/WaterLocForm'

class WaterZone extends Component {

  state = {
    selectedMarker: null,
    clicked: false,
    clickedCreate: false,
    water_locations: [],
    currentMarker: null, 
    mode: 'view'
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

  createWaterLoc = () => {
    this.setState({
      clickedCreate: !this.state.clickedCreate
    })
  }

  //active storage post request:
  saveWaterLoc = (e, id) => {
    e.preventDefault();
    const token = localStorage.token
    const data = new FormData(e.target);
    if (id) {
      fetch('http://localhost:3000/water_locations/'+ id, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data 
          })
      .then(resp => resp.json())
      .then(edit_water_location => 
        //console.log(edit_water_location)
        this.setState({
          water_locations: [ ...this.state.water_locations.filter( loc => loc.id != id), edit_water_location],
          selectedMarker: null, 
          mode: 'view'
          // clickedCreate: false
        })
      )
    }
    else 
    fetch('http://localhost:3000/water_locations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: data 
        })
    .then(resp => resp.json())
    .then(new_water_location => 
      this.setState({
        water_locations: [ ...this.state.water_locations, new_water_location ],
        selectedMarker: null,
        clickedCreate: false
      })
    )
  }

  updateAllWaterLocs = allWaterLocs => {
    this.setState({
      currentMarker: null,
      selectedMarker: null,
      water_locations: allWaterLocs
    })
  }

  selectMarker = (marker) => {
    console.log("marker selected", marker)
    this.setState({
      selectedMarker: marker, 
      clicked:!this.state.clicked
    })
  }

  handleEdit = () => {
    this.setState({
      mode:'edit'
    })
  }

  render() {
    console.log("water_locations", this.state.water_locations)  
    return (
      <div>
        <section id="one" className="wrapper style2">
          <div className="inner">
            <div>
            <Banner />
              <div className="box">
                <Map waterlocs={this.state.water_locations} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAg921cx5N2iHErau5GiVr9x-rsG9_42vs&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                selectMarker={this.selectMarker} mode={this.state.mode} handleEdit={this.handleEdit}/>
                  <br/><button onClick={this.createWaterLoc}>Add New</button>
                <div className="content">
                  <header className="align-center">
                  {this.state.clickedCreate || (this.state.mode === 'edit') ?
                    <WaterLocForm water_locations={this.state.water_locations} 
                      saveWaterLoc={this.saveWaterLoc} 
                      selectedMarker={this.state.selectedMarker} 
                      updateAllWaterLocs={this.updateAllWaterLocs} {...this.state.selectedMarker}/>
                  : null
                  }
                  </header>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WaterZone;