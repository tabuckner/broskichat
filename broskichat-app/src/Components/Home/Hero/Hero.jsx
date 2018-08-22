import React from 'react';

const Hero = (props) => {
  const {title, subtitle, tag} = props.content;
  
  return (
    <section className="hero is-primary is-bold is-medium has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title || 'Title'}</h1>
          <h2 className="subtitle">{subtitle || 'Subtitle'}<br></br>{tag || 'Tagline'}</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;