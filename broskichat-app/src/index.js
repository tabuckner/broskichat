import React from 'react';
import ReactDOM from 'react-dom';
import 'bulmaswatch/slate/bulmaswatch.min.css'; // CSS Framework
import './index.css'; // Main App Styles
import './Components/NotFound/NotFound.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
