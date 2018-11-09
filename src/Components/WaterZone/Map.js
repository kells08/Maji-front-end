import React, { Component } from 'react';
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

class Map extends Component {

  //   isOpen: false
  // }

  handleToggleOpen = (markerId) => {
    this.setState({ 
      isOpen: true
    });
  }

  handleToggleClose = (markerId) => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const waterlocs = this.props.waterlocs
    //const isOpen = this.state.isOpen;
    //console.log(waterlocs)
    return (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: -3.558535, lng: 37.552250 }}>

        {waterlocs.map(waterloc => {
          let [ lat, lng ] = waterloc.geolocation.split(', ').map(parseFloat) 

         return (

         <Marker onClick={() => this.onToggleOpen} value={waterloc.geolocation} key={waterloc.id} position={{ lat, lng }} >

           <InfoWindow position={{lat, lng}} onCloseClick={this.onToggleOpen}>
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