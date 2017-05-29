import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
