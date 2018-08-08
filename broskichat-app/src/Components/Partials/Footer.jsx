import React from 'react';
import Copyright from './Copyright/Copyright';
import PreFooter from './PreFooter/PreFooter';

class Footer extends React.Component {

  render() {
    return (
    <footer className = "footer">
      <PreFooter />
      <Copyright />
    </footer>
    );
  }
}

export default Footer;
