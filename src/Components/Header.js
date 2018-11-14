import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {

  state={
    active:false
  }

  close = () =>{
    this.setState({active:false})
  }

  render() {
    return (
      <div>
        <header id="header" className="alt">
          <div className="logo">
            <a href="index.html">Resource <span>serving -  funding - sharing</span></a>
          </div>
          <a href="#menu" onClick={ e => this.setState({active:true})} className="toggle"><span>Menu</span></a>  
        </header>
        <Nav active={this.state.active} close={this.close} handleClick={this.props.handleClick}/>
        <section id="banner" data-video="images/banner">
          <div className="inner">
            <h1>Maji</h1>
            {/* <a href="#one" className="button special scrolly">Get Started</a> */}
          </div>
        </section>  
      </div>
    );
  }
}

export default Header;