import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Page extends Component {
  render() {
    if(localStorage.token) return (
      <Redirect 
        to = {
          {
            pathname:"/app",
            history: this.props.history
          }
        }
      />
    )
    else return (
      <Redirect 
      to = {
        {
          pathname:"/login",
          history: this.props.history
        }
      }
    />
    )
  }
}

export default Page;