import React, { Component } from 'react';
import { withScriptjs,  withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

class Map extends Component {

  state = {
    selectedPin: null
  }

  selectPin = (e) => {
    //debugger
    console.log("pin", e)
    this.setState({
      selectedPin: e
    })
  }

  render() {
    const waterlocs = this.props.waterlocs
    //console.log(waterlocs)
    return (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: -3.558535, lng: 37.552250 }}>
        
        {waterlocs.map(waterloc => {
          let [ lat, lng ] = waterloc.geolocation.split(', ').map(parseFloat)
         return (
         <Marker onClick={this.selectPin} value={waterloc.geolocation} key={waterloc.id} position={{ lat, lng }} >
           <InfoWindow position={{lat, lng}}>
            <div>
              <p>Geolocation: {waterloc.geolocation}</p>
              <p>City: {waterloc.city}</p>
              <p>Details: {waterloc.details}</p>
              <p>Currently Active: {waterloc.active === 1 ? "No" : "Yes"}</p>
              <p>Hours: {waterloc.hours}</p>
            </div>
			    </InfoWindow>
         </Marker>
         )
        })}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));