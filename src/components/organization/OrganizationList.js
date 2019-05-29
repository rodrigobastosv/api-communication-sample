import React, { PureComponent, Fragment } from "react";
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { OrganizationCard } from './organizationCard/OrganizationCard';
import { ORGANIZATIONS_ENDPOINT } from "../../constants";

export class OrganizationList extends PureComponent {

    state = {
        organizations: [],
        isLoading: false
    }

    componentDidMount() {
        const {username, password} = this.props.location.state;
        this.setState({ isLoading: true});
        axios.get('https://beta.greenmile.com' + '/' + ORGANIZATIONS_ENDPOINT, {
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
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Organizations
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.state.isLoading ? <LinearProgress color="secondary" /> : null}

                {this.state.organizations.map(o => <OrganizationCard organization={o} key={o.id}/>)}
            </Fragment>);
    }
}