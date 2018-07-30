import React from 'react';
import ReactDOM from 'react-dom';

// import logo from '../../logo.svg';

const title = "Broski Chat";
const menuItems = [ "Chat", "About", "Contact" ];

const eachMenuItem = menuItems.map((item, index) => {
    return <a className="navbar-item has-text-light" key={index}> {item} </a>;
})

class Header extends React.Component {
    
    render() {
        return (
            <nav className="navbar navbar-menu is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item is-size-5">
                        {title}
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        {eachMenuItem}
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

const header = <Header />;
ReactDOM.render(
  header,
  document.getElementById('root')
);

export default Header;
