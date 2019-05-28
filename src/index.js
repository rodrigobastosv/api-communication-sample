import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import './index.css';

import { Login } from './components/login/Login';
import { OrganizationList } from './components/organization/OrganizationList';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#009900'
        },
        secondary: {
            main: '#546111'
        }
    },
});

const app = (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/organization" component={OrganizationList} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
