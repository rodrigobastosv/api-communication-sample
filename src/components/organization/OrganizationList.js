import React, { PureComponent, Fragment } from "react";
import axios from 'axios';


import LinearProgress from '@material-ui/core/LinearProgress';

import { OrganizationCard } from './organizationCard/OrganizationCard';
import { ORGANIZATIONS_ENDPOINT } from "../../constants";

import GMOrganizationsBar from '../gm-organizations-bar/GMOrganizationsBar';
import classes from "./OrganizationList.module.css";

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
                <GMOrganizationsBar history={this.props.history}/>

                <div className={classes.contentContainer}>
                    {this.state.isLoading ? <LinearProgress color="secondary" /> : null}

                    <div className={classes.organizationsContainer}>
                        {this.state.organizations.map(o => <OrganizationCard organization={o} key={o.id} />)}
                    </div>
                </div>
            </Fragment>);
    }
}