import React, { Component } from 'react';

import './App.css';

// Imports of ./Components
import Header from './Components/Partials/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Partials/Footer';

class App extends Component {
  render() {

    return (

      <div>
        <Header />

        <div className="App">
          <Home />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
