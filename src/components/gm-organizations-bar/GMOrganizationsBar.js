import React, { PureComponent, Fragment } from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';

import classes from './GMOrganizationsBar.module.css';

export class GMOrganizationsBar extends PureComponent {

    render() {
        return (
            <Fragment>
                <AppBar className={classes.appbar} position="fixed">
                    <Toolbar className={classes.toolbar}>
                        <Avatar className={classes.greenmileAvatar}>GM</Avatar>

                        <Typography variant="h5" component="h2">
                            Organizations
                        </Typography>

                        <PopupState variant="popper" popupId="demo-popup-menu">
                            {popupState => (
                                <React.Fragment>
                                    <IconButton edge="start" color="inherit" aria-label="Menu" {...bindTrigger(popupState)}>
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={() => this.props.history.goBack()}>
                                            <ListItemIcon>
                                                <ExitToAppRounded />
                                            </ListItemIcon>
                                            <ListItemText primary="Logout" />
                                        </MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

export default GMOrganizationsBar;