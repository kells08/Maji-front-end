import React, { Component } from 'react';
import Header from './Components/Header'
import Page from './Components/Page'
import Login from './Components/Login'
import MainContainer from './Components/MainContainer';
import Footer from './Components/Footer'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/app" component={MainContainer} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Page} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
