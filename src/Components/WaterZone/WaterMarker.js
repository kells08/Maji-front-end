import React, { Component } from 'react'
import { Marker, InfoWindow } from "react-google-maps"

class WaterMarker extends Component {

  state={
    isOpen: false
  } 

  toggleOpen = () => {
    this.setState({ 
      isOpen: !this.state.isOpen
    });//to click and put fields into edit form, change this up to alter state to "selectedMarker", then if this marker matches the id of the marker.id, edit.
  }

  render(){
    let { lat, lng, waterloc } = this.props
    return (

      <Marker onClick={() => this.toggleOpen()} value={waterloc.geolocation} key={waterloc.id} position={{ lat, lng }} >

      {this.state.isOpen && // (this.props.selectedLocation === waterloc &&)
        <InfoWindow position={{lat, lng}} onCloseClick={this.onToggleOpen}>
           <div>
             <p>Geolocation: {waterloc.geolocation}</p>
             <p>City: {waterloc.city}</p>
             <p>Details: {waterloc.details}</p>
             <p>Currently Active: {waterloc.active === 1 ? "No" : "Yes"}</p>
             <p>Hours: {waterloc.hours}</p>
             <button onClick={this.props.selectMarker}>Edit</button>
           </div>
         </InfoWindow>}
       
      </Marker>
      )
  }
}

export { WaterMarker }