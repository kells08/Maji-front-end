import React, { Component } from 'react';
import { withScriptjs,  withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {

  state = {
    selectedPin: null
  }

  selectPin = (e) => {
    debugger
    console.log("pin", e.target.id)
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
         return <Marker onClick={this.selectPin} value={waterloc.id} key={waterloc.id} position={{ lat, lng }} />
        })}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));