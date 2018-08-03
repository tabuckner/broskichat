import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Partials/Header';

import TestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Header />', () => {
  it('Header this.title === \'BroskiChat\'', () => {
    // Create a renderer instance
    const header = TestRenderer.create(<Header />);
    // instance root
    const root = header.root;

    // Expect <a className="navbar-item is-size-5"> to equal 'Broski Test'
    expect(root.findByProps({className: "navbar-item is-size-5"}).children).toEqual([ 'BroskiChat' ]);
  });
});
