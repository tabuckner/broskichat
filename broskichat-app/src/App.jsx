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
          {/* Main Container Area */}
        </div>

      </div>
    );
  }
}

export default App;
