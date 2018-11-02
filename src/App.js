import React, { Component } from 'react';
import Login from './Components/Login'
import MainContainer from './Components/MainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <MainContainer />
      </div>
    );
  }
}

export default App;
