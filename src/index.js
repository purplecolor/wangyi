import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
//import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
//import Detail from '@/component/detail.js';
ReactDOM.render(
	<App/>,
	document.getElementById('root'));
registerServiceWorker();
