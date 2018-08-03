import React from 'react';

// import logo from '../../logo.svg'; // Use logo later

class Header extends React.Component {
  // constructor(props) { // Kept for when passing in props
  //     super(props);
  // }
  
  render() {
    const logoTitle = "Broski Test"
    // Change array to update menu items. map() each element.
    const menuItems = [ "Chat", "About", "Contact" ].map((item, index) => {
      // Return each element w/ key
      return <a className="navbar-item has-text-light" key={index}> {item} </a>;
    });

    return (
      <nav className="navbar navbar-menu is-dark">
        <div className="navbar-brand">
          <a className="navbar-item is-size-5">

            { logoTitle }

          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            
            { menuItems }

          </div>
          <div className="navbar-end">

            {/* If annonymous */}
            <a className="navbar-item has-text-light is-right"> Login </a>
            <a className="navbar-item has-text-light is-right"> Register </a>

            {/* If logged in */}
            {/* <a className="navbar-item has-text-light is-right"> Account </a>
            <a className="navbar-item has-text-light is-right"> Logout </a> */}
            
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
