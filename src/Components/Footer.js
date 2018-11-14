import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <section id="banner" className="wrapper style3">
          <div className="inner">
            <header className="align-center">
            {/* <div id="footer" className="wrapper"> */}
              <div className="copyright">
              <h5>&copy; 2018 Kelly Lwakatare </h5>
              <a href="https://templated.co/">TEMPLATED</a>. 
              Images <a href="https://unsplash.com/">Unsplash</a>.
              </div>
            </header>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;