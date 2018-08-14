import React, { Component } from 'react';

import './App.css';
// Imports of ./Components
import Header from './Components/Partials/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Partials/Footer';
import Register from './Components/Users/Register/Register';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <Home />

          <Register />
          
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
