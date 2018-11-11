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
    "hours": this.props.hours || "",
    "id": this.props.id || ""
}
  
  onChange = e => {
    const elementInState = e.target.id;
    const value = e.target.value;
    this.setState({ [elementInState]: value })
  }

  saveEdit= ({ geolocation, pluscode, city, country, image, details, active, hours }) => {
    const token = localStorage.token
    fetch(`http://localhost:3000/water_locations/${this.state.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify ({
      note: { 
        geolocation, 
        pluscode, 
        city, 
        country, 
        image, 
        details, 
        active, 
        hours
      }
    })})
    .then(resp => resp.json())
    .then(response => {
      this.setState ({ 
        geolocation: '', 
        pluscode: '', 
        city: '', 
        country: '', 
        image: '', 
        details: '', 
        active: '', 
        hours: '',
        id: ''
      }, () => {
        this.props.updateAllWaterLocs(response);
      })
    })
}

  render() {
    console.log("water-form-props", this.props.water_locations)
    const {geolocation, pluscode, city, country, image, details, active, hours} = this.state
    return (
      <div >
        <form class="wrapper" onSubmit={(e) => this.props.saveWaterLoc(e)}>
          <h3>Add a water source:</h3>
          <input name="water_location[geolocation]" placeholder="geolocation" id="geolocation" value={geolocation} onChange={this.onChange} /><br/>
          <input name="water_location[pluscode]" placeholder="pluscode" id="pluscode" value={pluscode} onChange={this.onChange} /><br/>
          <input name="water_location[city]" placeholder="city" id="city" value={city} onChange={this.onChange} /><br/>
          <input name="water_location[country]" placeholder="country" id="country" value={country} onChange={this.onChange} /><br/>
          <input type="file" name="water_location[image]" value={image} onChange={this.onChange} style={{border:"1px solid black"}}/><br/>
          <textarea name="water_location[details]" placeholder="details" id="details" value={details} onChange={this.onChange} /><br/>
          <select name="water_location[active]" value={active} onChange={this.onChange} >
            <option defaultValue="true">Currently Active</option>
            <option value="false">Not Currently Active</option>
          </select><br/>
          <input name="water_location[hours]" placeholder="hours" id="hours" value={hours} onChange={this.onChange} /><br/>
          <button>Submit</button><br/><br/>
          </form>
      </div>

    );
  }
}

export default WaterLocForm;