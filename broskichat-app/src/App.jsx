import React, { Component } from 'react';

import './App.css';

// Imports of ./Components
import Header from './Components/Partials/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Partials/Footer';
import About from './Components/About/About';

class App extends Component {
  render() {

    return (

      <div>
        <Header />

        <div className="App">
          <Home />
          <About />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
