import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../logo.svg'; // Use logo later

class Header extends React.Component {
  constructor(props) {
      super(props);

      // Toggle when hamburger is clicked
      this.isOpen = false;
      
      /* Header Items */
      this.title = "BroskiChat";

      // Nav menu items
      this.menuItems = [
        { name:"Chat", path: "/chat", 
          children: {
            name1:"Placeholder1", path1: "",
            name2:"Placeholder2", path2: ""
          } }, 
        { name:"About", path: "/about" }, 
        { name:"Contact", path: "" } ].map((item, index) => {
        
        // If item have children
        if(item.children) {
          return  <div className="navbar-item has-dropdown is-hoverable" key={index}> 
                    {/* Keep in mind `hrefs` will be replaced with a router */}
                    <a className="navbar-link has-text-light" href={item.path}>
                      {item.name}
                    </a>
                    <div className="navbar navbar-dropdown has-text-light is-dark">
                      <a className="navbar-item has-text-light" href={item.children.path1}>
                        {item.children.name1}
                      </a>
                      <a className="navbar-item has-text-light" href={item.children.path2}>
                        {item.children.name2}
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item has-text-light">
                        Version 0.0
                      </div>
                    </div>
                  </div>;
        } else {
          // Return each element w/ key
          return <a className="navbar-item has-text-light" href={item.path} key={index}> {item.name} </a>;
        }
      });  
  }

  // When hamburger is clicked function
  onClickHamburger = () => {
    // Grab elements ref `menu`, `burger`
    const menu = this.refs.navMenu,
          burger = this.refs.hamburger;

    if(!this.isOpen) {
      // Add active class
      menu.classList.add('is-active');
      burger.classList.add('is-active');

    } else {
      // Remove active class
      menu.classList.remove('is-active');
      burger.classList.remove('is-active');

    }
    // Set isOpen to opposite
    this.isOpen = !this.isOpen;
    
  }
  
  render() {
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item is-size-5" href="/">

            { this.title }

          </a>

          <div className="navbar-burger" ref="hamburger" onClick={this.onClickHamburger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar navbar-menu is-dark" ref="navMenu">
          <div className="navbar-start">
            
            { this.menuItems }

          </div>
          <div className="navbar-end">

            {/* If annonymous */}
            <a className="navbar-item has-text-light is-right">Login</a>
            <a className="navbar-item has-text-light is-right" href="/register">Register</a>

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
