import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from './Home';
import Hero from './Hero/Hero';
import Marketing from './Marketing/Marketing';


describe('<Home />', () => {
  const home = TestRenderer.create(<Home />);
  const root = home.root;

  it('should have a hero element', () => {
    const hero = root.findByType(Hero);
    expect(hero).toBeDefined();
  });

  it('should have a marketing element', () => {
    const marketing = root.findByType(Marketing);
    expect(marketing).toBeDefined();
  });
});
