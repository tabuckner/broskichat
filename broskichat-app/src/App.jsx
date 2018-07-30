import React, { Component } from 'react';

import './App.css';

// Imports of ./Components
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer'

class App extends Component {
  render() {

    return (      
      
      <div>
        <Header />

        <div className="container App">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
