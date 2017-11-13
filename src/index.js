import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {routes} from './routes'
import MainContainer from "./containers/MainContainer/MainContainer";

const root = document.getElementById('root');

ReactDOM.render(<MainContainer/>, root);

registerServiceWorker();
