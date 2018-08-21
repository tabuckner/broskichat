import React from 'react';
import image404 from './404.png';

const NotFound = () => {
  return (
    <section className="not-found hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Uh Oh!</h1>
          <img src={image404} alt="404 image" />
          <p className="subtitle">The page you've requested was not found.</p>
          <a href="/" className="button is-medium is-info is-inverted is-outlined is-rounded">Back Home</a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;