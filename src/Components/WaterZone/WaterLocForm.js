import React, { Component } from 'react';

class WaterLocForm extends Component {

  state = {
    "geolocation": "",
    "pluscode": "",
    "city": "",
    "country": "",
    "img": null,
    "details": "",
    "active": "1",
    "hours": ""
}
  
  onChange = e => {
    const elementInState = e.target.name;
    const value = e.target.value;
    this.setState({ [elementInState]: value })
  }

  render() {
    console.log("water-form-props", this.props.water_locations)
    const {geolocation, pluscode, city, country, details, active, hours} = this.props.water_locations
    return (
      <div >
          <h3>Add a water source:</h3>
          <input name="geolocation" placeholder="geolocation" value={geolocation} onChange={this.onChange} /><br/>
          <input name="pluscode" placeholder="pluscode" value={pluscode} onChange={this.onChange} /><br/>
          <input name="city" placeholder="city" value={city} onChange={this.onChange} /><br/>
          <input name="country" placeholder="country" value={country} onChange={this.onChange} /><br/>
          <textarea name="details" placeholder="details" value={details} onChange={this.onChange} /><br/>
          <select value={active} onChange={this.onChange}>
            <option defaultValue="true">Currently Active</option>
            <option value="false">Not Currently Active</option>
          </select><br/>
          <input name="hours" placeholder="hours" value={hours} onChange={this.onChange} /><br/>
          <button onClick={() => this.props.createNewLoc({...this.state})}>Submit</button><br/><br/>
      </div>

    );
  }
}

export default WaterLocForm;