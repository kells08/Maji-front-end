import React, { Component } from 'react';
import PaypalButton from './PaypalButton'

class DonateForm extends Component {
  render() {

    // const onSuccess = (payment) =>
    //   console.log('Successful payment!', payment);

    // const onError = (error) =>
    //   console.log('Erroneous payment OR failed to load script!', error);

    // const onCancel = (data) =>
    //   console.log('Cancelled payment!', data);

    return (
      <div>
          <h3>Donate!</h3>
          <p>Make a donation of any amount to help support Maji's efforts.</p>
          {/* <input placeholder="Enter amount in USD" /><br/><br/> */}
          <PaypalButton/><br/>
      </div>
    );
  }
}

export default DonateForm;