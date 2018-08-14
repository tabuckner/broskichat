import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css' // CSS Framework
import './index.css'; // Main App Styles
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './Components/About/About'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
