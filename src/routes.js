import * as React from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import MainContainer from "./containers/MainContainer/MainContainer";
import App from "./components/App/App";
import Test from './components/Test/Test';

export const routes =
    <BrowserRouter>
        <Route path='/' component={MainContainer}>
            <Route path='test' component={Test}/>
        </Route>
    </BrowserRouter>;