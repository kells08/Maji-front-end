import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <section id="banner" data-video="images/banner">
				<div class="inner">
					<h1>Maji</h1>
					<a href="#one" class="button special scrolly">Get Started</a>
          {/* <Nav handleClick={this.props.handleClick}/> */}
				</div>
			</section>  
    );
  }
}

export default Header;