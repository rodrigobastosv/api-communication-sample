import React, { PureComponent, Fragment } from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';

import classes from './GMOrganizationsBar.module.css';

export class GMOrganizationsBar extends PureComponent {

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
            </Fragment>
        );
    }
}

export default GMOrganizationsBar;