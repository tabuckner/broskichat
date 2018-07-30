import React from 'react';
import ReactDOM from 'react-dom';

// import logo from '../../logo.svg';

const title = "preBulma";
const menuItems = ["menuItem1", "menuItem2", "menuItem3", "menuItem4", "menuItem5"];

const eachMenuItem = menuItems.map((item, index) => {
    return <li key={index}> {item} </li>;
})

class Header extends React.Component {
    
    render() {
        return (
            <header className="header">
                <div className="innerHeader">
                    <div>{title}</div>
                    <div>
                        <ul>
                            {eachMenuItem}
                        </ul>
                    </div>
                </div>
            </header> 
        );
    }
}

const header = <Header />;
ReactDOM.render(
  header,
  document.getElementById('root')
);

export default Header;

// Notes

// ***Kept this for className reference*** //
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Hello from header</h1>
// </header> 
