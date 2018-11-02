import React, { Component } from 'react';
import Page from './Components/Page'
import Login from './Components/Login'
import MainContainer from './Components/MainContainer';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/app" component={MainContainer} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
