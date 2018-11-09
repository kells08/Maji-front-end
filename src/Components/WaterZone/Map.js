import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { WaterMarker } from './WaterMarker'
class Map extends Component {

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
          return <WaterMarker lat={lat} lng={lng} waterloc={waterloc} selectMarker={this.props.selectMarker}/>
        })}
      </GoogleMap>
    );
  }
}


export default withScriptjs(withGoogleMap(Map));