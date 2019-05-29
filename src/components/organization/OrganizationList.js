import React, { PureComponent, Fragment } from "react";
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';

import { OrganizationCard } from './organizationCard/OrganizationCard';
import { ORGANIZATIONS_ENDPOINT } from "../../constants";

import classes from './OrganizationList.module.css';

export class OrganizationList extends PureComponent {

    state = {
        organizations: [],
        isLoading: false
    }

    componentDidMount() {
        const {server, username, password} = this.props.location.state;
        this.setState({ isLoading: true});
        axios.get(`${server}/${ORGANIZATIONS_ENDPOINT}`, {
            auth: {
                username: username,
                password: password
            }
        })
        .then((response) => {
            this.setState({
                isLoading: false,
                organizations: response.data
            });
        }).catch((err) => {
            this.setState({ isLoading: false });
        });
    }

    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Organizations
                        </Typography>

                        <IconButton onClick={() => this.props.history.goBack()} aria-label="Delete">
                            <ExitToAppRounded />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {this.state.isLoading ? <LinearProgress color="secondary" /> : null}

                {this.state.organizations.map(o => <OrganizationCard organization={o} key={o.id}/>)}
            </Fragment>);
    }
}