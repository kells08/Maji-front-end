import React, { Component } from 'react'
import { Marker, InfoWindow } from "react-google-maps"
import WaterLocForm from './WaterLocForm'

class WaterMarker extends Component {

  state={
    isOpen: false,
    "geolocation": this.props.geolocation || "",
    "pluscode": this.props.pluscode || "",
    "city": this.props.city || "",
    "country": this.props.country || "",
    "image": this.props.image || null,
    "details": this.props.details || "",
    "active": this.props.active || "1",
    "hours": this.props.hours || "",
    "id": this.props.id || ""
  }
  
  // onChange = e => {
  //   const elementInState = e.target.id;
  //   const value = e.target.value;
  //   this.setState({ [elementInState]: value })
  // }

  toggleOpen = () => {
    this.setState({ 
      isOpen: !this.state.isOpen
    });//to click and put fields into edit form, change this up to alter state to "selectedMarker", then if this marker matches the id of the marker.id, edit.
  }

  // saveEdit= ({ geolocation, pluscode, city, country, image, details, active, hours }) => {
  //   const token = localStorage.token
  //   fetch(`http://localhost:3000/water_locations/${this.state.id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   },
  //   body: JSON.stringify ({
  //     water_location: { 
  //       geolocation, 
  //       pluscode, 
  //       city, 
  //       country, 
  //       image, 
  //       details, 
  //       active, 
  //       hours
  //     }
  //   })})
  //   .then(resp => resp.json())
  //   .then(response => {
  //     this.setState ({ 
  //       mode: 'view',
  //       geolocation: '', 
  //       pluscode: '', 
  //       city: '', 
  //       country: '', 
  //       image: '', 
  //       details: '', 
  //       active: '', 
  //       hours: '',
  //       id: ''
  //     }, () => {
  //       this.props.updateAllWaterLocs(response);
  //     })
  //   })
  // }

  render(){
    let { lat, lng, waterloc } = this.props
    return (

      <Marker onClick={() => this.toggleOpen()} value={waterloc.geolocation} key={waterloc.id} position={{ lat, lng }} >

      {this.state.isOpen && // (this.props.selectedLocation === waterloc &&)
        <InfoWindow position={{lat, lng}} onCloseClick={this.onToggleOpen}>
          <div>
            <img src={waterloc.image_url} alt=""/>
            <p>Geolocation: {waterloc.geolocation}</p>
            <p>City: {waterloc.city}</p>
            <p>Details: {waterloc.details}</p>
            <p>Currently Active: {waterloc.active === 1 ? "No" : "Yes"}</p>
            <p>Hours: {waterloc.hours}</p>
            <button onClick={e => {this.props.selectMarker(waterloc); this.props.handleEdit()}}>Edit</button>
          </div>
        </InfoWindow>}
      </Marker>
      )
  }
}

export { WaterMarker }