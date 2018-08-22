import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';

import './App.css';
// Imports of ./Components
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Register from './Components/Users/Register/Register';
import Chat from './Components/Chat/Chat';
import NotFound from './Components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <div className="App">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/register"} component={Register} />
              <Route path={"/chat"} component={Chat} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
