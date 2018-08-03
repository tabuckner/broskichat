import React, { Component } from 'react';

import './App.css';

// Imports of ./Components
import Header from './Components/Partials/Header';
import Home from './Components/Home/Home';

class App extends Component {
  render() {

    return (

      <div>
        <Header />

        <div className="App">
          <Home />
        </div>

      </div>
    );
  }
}

export default App;
