import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
// Imports of ./Components
import Header from './Components/Partials/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Partials/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <div className="App">
            <Route exact path={"/"} component={Home} />
            <Route path={"/about"} component={About} />
          </div>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
