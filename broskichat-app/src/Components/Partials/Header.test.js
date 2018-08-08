import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './Header';

describe('<Header />', () => {
  it('Header this.title === \'BroskiChat\'', () => {
    // Create a renderer instance
    const header = TestRenderer.create(<Header />);
    // instance root
    const root = header.root;

    // Expect <a className="navbar-item is-size-5"> to equal 'Broski Test'
    expect(root.findByProps({className: "navbar-item is-size-5"}).children).toEqual([ 'BroskiChat' ]);
