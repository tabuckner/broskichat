import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';

import './App.css';
// Imports of ./Components
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Chat from './Components/Chat/Chat';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
// Font Awesome Library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShare, faToolbox, faSmile } from '@fortawesome/free-solid-svg-icons';
library.add(faShare, faToolbox, faSmile);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <div className="App">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/chat"} component={Chat} />
              <Route path={"/about"} component={About} />
              <Route path={"/contact"} component={Contact} />
              <Route path={"/login"} component={Login} />
              <Route path={"/register"} component={Register} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
