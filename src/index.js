import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Check from './Check';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Check />, document.getElementById('root'));
registerServiceWorker();
