import React, { Component } from 'react';

import './App.css';

// Imports of ./Components
import Header from './Components/Partials/Header';

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

      </div>
    );
  }
}

export default App;
