import React, { Component } from 'react';
import PaypalButton from './PaypalButton'

class DonateForm extends Component {

  state= {
    total: 0
  }

  donateAmount = (e) => {
    this.setState({
      total: e.target.value
    })
  }

  render() {

    // const onSuccess = (payment) =>
    //   console.log('Successful payment!', payment);

    // const onError = (error) =>
    //   console.log('Erroneous payment OR failed to load script!', error);

    // const onCancel = (data) =>
    //   console.log('Cancelled payment!', data);

    console.log("donateAmount", this.state)

    return (
      <section id="one" class="wrapper style2">
				<div class="inner">
      <div>
          <h3>Donate!</h3>
          <h4>Make a donation of any amount to help support Maji's efforts.</h4>
          <input placeholder="Enter amount in USD" onChange={this.donateAmount} /><br/><br/>
          <PaypalButton total={this.state.total}/><br/>
          <hr/>
      </div>
      </div>
      </section>
    );
  }
}

export default DonateForm;