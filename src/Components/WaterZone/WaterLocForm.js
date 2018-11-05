import React, { Component } from 'react';

class WaterLocForm extends Component {
  render() {
    return (
      <div >
          <h3>Add a water source:</h3>
          <input placeholder="geolocation"/><br/>
          <input placeholder="pluscode"/><br/>
          <input placeholder="city"/><br/>
          <input placeholder="country"/><br/>
          <input placeholder="details"/><br/>
          <select>
            <option selected value="currently active">Currently Active</option>
            <option value="not currently active">Not Currently Active</option>
          </select><br/>
          <input placeholder="hours"/><br/><br/>
      </div>

    );
  }
}

export default WaterLocForm;