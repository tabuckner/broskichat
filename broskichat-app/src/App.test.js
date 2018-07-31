import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Partials/Header';

import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Header is DOM Component', () => {
  const header = <Header />
  ReactTestUtils.isDOMComponent(header)
});
