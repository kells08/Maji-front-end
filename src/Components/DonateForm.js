import React, { Component } from 'react';

class DonateForm extends Component {
  render() {
    return (
      <div>
          <h3>Donate!</h3>
          <p>Make a donation of any amount to help support Maji's efforts.</p>
          <input placeholder="Enter amount in USD" />
          <button>Make Donation</button>
          <p>(connect to Paypal)</p>
      </div>
    );
  }
}

export default DonateForm;