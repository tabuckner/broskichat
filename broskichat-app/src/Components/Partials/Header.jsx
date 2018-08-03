import React from 'react';

// import logo from '../../logo.svg'; // Use logo later

class Header extends React.Component {
  constructor(props) { // Kept for when passing in props
      super(props);

      /* Functions */
      // When hamburger is clicked
      this.isOpen = false;
      this.onClickHamburger = () => {
        // Grab elements `menu`, `burger`
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
      
      /* Header Items */
      this.title = "BroskiChat";

      // Nav menu items
      this.menuItems = [
        { name:"Chat", path: "", 
          children: {
            name1:"Placeholder1", path1: "",
            name2:"Placeholder2", path2: ""
          } }, 
        { name:"About", path: "" }, 
        { name:"Contact", path: "" } ].map((item, index) => {
        
        // If item have children
        if(item.children) {
          return  <div className="navbar-item has-dropdown is-hoverable" key={index}> 
                    {/* `has-text-light` can be removed when Bulmaswatch */}
                    <a className="navbar-link has-text-light">
                      {item.name}
                    </a>
                    {/* `navbar` and `is-dark` can be removed when Bulmswatch */}
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
  
  render() {
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item is-size-5">

            { this.title }

          </a>

          <div className="navbar-burger" ref="hamburger" onClick={this.onClickHamburger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        {/* `navbar` and `is-dark` can be removed when Bulmswatch */}
        <div className="navbar navbar-menu is-dark" ref="navMenu">
          <div className="navbar-start">
            
            { this.menuItems }

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
