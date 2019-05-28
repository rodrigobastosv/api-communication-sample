import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import classes from './Login.module.css';
import { HOST, LOGIN_ENDPOINT } from '../../constants';

export class Login extends Component {

    state = {
        company: '',
        username: '',
        password: '',
        loginFailled: false,
        formValid: false
    };

    companyChangeHandler = (event) => this.setState({ company: event.target.value, formValid: this.getFormValidity() });
    usernameChangeHandler = (event) => this.setState({ username: event.target.value, formValid: this.getFormValidity() });
    passwordChangeHandler = (event) => this.setState({ password: event.target.value, formValid: this.getFormValidity() });

    getFormValidity() {
        return this.state.company !== '' && this.state.username !== '' && this.state.password !== ''
    }
 
    submitFormHandler = () => {
        let { history } = this.props;
        history.push('/organization', {a: 1});

        axios.post(HOST + LOGIN_ENDPOINT, {
            username: encodeURI('gmtmproot'),
            password: encodeURI('128h1892h89dh1')
        }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function (response) {
                this.setState({ loginFailled: false })
            }).catch(error => {
                this.setState({ loginFailled: true })
            });
    }

    render() {
        return (
            <div className={classes.loginFormContainer}>
                <div className={classes.logo}></div>
                <TextField
                    required
                    id="companyTF"
                    label="Company"
                    margin="normal"
                    variant="outlined"
                    value={this.state.company}
                    onChange={this.companyChangeHandler}
                />
                <TextField
                    required
                    id="usernameTF"
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={this.state.username}
                    onChange={this.usernameChangeHandler}
                />
                <TextField
                    required
                    id="passwordTF"
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    value={this.state.password}
                    onChange={this.passwordChangeHandler}
                />

                <div className={classes.loginButtonContainer}>
                    <Button 
                        onClick={this.submitFormHandler}
                        disabled={!this.state.formValid}
                        className={classes.loginButton}
                        variant="contained"
                        color="primary">Login</Button>
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    message='Either username or password are invalid!'
                    open={this.state.loginFailled}
                    autoHideDuration={100}>
                </Snackbar>
            </div>
        );
    }
}

export default withRouter(Login); 