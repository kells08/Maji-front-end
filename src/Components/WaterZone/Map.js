import React, { Component } from 'react';
import { withScriptjs,  withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {

  render() {
    const waterlocs = this.props.waterlocs
    //console.log(waterlocs)
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -3.558535, lng: 37.552250 }}>
        {waterlocs.map(waterloc => {
          let [ lat, lng ] = waterloc.geolocation.split(', ').map(parseFloat)
         return <Marker key={waterloc.id} position={{ lat, lng }} />
        })}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));