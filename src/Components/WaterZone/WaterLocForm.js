import React, { Component } from 'react';

class WaterLocForm extends Component {

  state = {
    "geolocation": this.props.geolocation || "",
    "pluscode": this.props.pluscode || "",
    "city": this.props.city || "",
    "country": this.props.country || "",
    "image": this.props.image || null,
    "details": this.props.details || "",
    "active": this.props.active || "1",
    "hours": this.props.hours || ""
}
  
  onChange = e => {
    const elementInState = e.target.name;
    const value = e.target.value;
    this.setState({ [elementInState]: value })
  }

  render() {
    console.log("water-form-props", this.props.water_locations)
    const {geolocation, pluscode, city, country, image, details, active, hours} = this.state
    return (
      <div >
          <h3>Add a water source:</h3>
          <input name="geolocation" placeholder="geolocation" value={geolocation} onChange={this.onChange} /><br/>
          <input name="pluscode" placeholder="pluscode" value={pluscode} onChange={this.onChange} /><br/>
          <input name="city" placeholder="city" value={city} onChange={this.onChange} /><br/>
          <input name="country" placeholder="country" value={country} onChange={this.onChange} /><br/>
          <input type="file" name="image" value={image} onChange={this.onChange} style={{border:"1px solid black"}}/><br/>
          <textarea name="details" placeholder="details" value={details} onChange={this.onChange} /><br/>
          <select value={active} onChange={this.onChange} >
            <option defaultValue="true">Currently Active</option>
            <option value="false">Not Currently Active</option>
          </select><br/>
          <input name="hours" placeholder="hours" value={hours} onChange={this.onChange} /><br/>
          <button onClick={() => this.props.saveWaterLoc({...this.state})}>Submit</button><br/><br/>
      </div>

    );
  }
}

export default WaterLocForm;