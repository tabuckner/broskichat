import React from 'react';
import software from './software.png';

class About extends React.Component {
  render(){
    return (
      <div>
        <figure className = "image">
          <img src= {software}/>
        </figure>

        <section className = "hero is-info is-bold is-flex">
          <div className = "hero-body">
            <div className = "container">
              <h1 className = "title has-text-centered">
                About Us
              </h1>
              <h2>
                ipsum  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h2>
            </div>
          </div>
        </section>

        {/*
        <div className = "columns is-multiline">
          <div className = "desc column is-half has-text-white has-background-info">
            <h1 has-text-centered>
              Name
            </h1>
            <p>
              ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className = "info column is-half has-text-centered has-text-white has-background-link">
            link(s)
          </div>
        </div>
        */}



      </div>



    )
  }
}
export default About;
