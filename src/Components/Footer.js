import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <section id="banner" class="wrapper style3">
          <div class="inner">
            <header class="align-center">
            {/* <div id="footer" class="wrapper"> */}
              <div class="copyright">
              <h5>&copy; 2018 Kelly Lwakatare </h5>
              <a href="https://templated.co/">TEMPLATED</a>. Images <a href="https://unsplash.com/">Unsplash</a>. Video <a href="http://coverr.co/">Coverr</a>.
              </div>
            </header>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;