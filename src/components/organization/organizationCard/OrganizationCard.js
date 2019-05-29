import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import classes from './OrganizationCard.module.css';

export class OrganizationCard extends PureComponent {

    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    getDateFormatted(date) {
        return new Date(date).toLocaleDateString('en-US', this.options);
    }

    render() {
        return (
            <Card className={classes.organizationCard}>
                <CardContent>
                    <Typography variant="h5" component="h2" className={classes.organizationKeyContainer}>
                        {this.props.organization.key}
                    </Typography>

                    <Typography color="textPrimary">
                        Description:
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.organization.description}
                    </Typography>

                    <Typography color="textPrimary">
                        Creation Date: 
                    </Typography>
                    <Typography color="textSecondary">
                        {this.getDateFormatted(this.props.organization.creationDate)}
                    </Typography>

                    <Typography color="textPrimary">
                        Unit System:
                    </Typography>
                    <Typography color="textSecondary">
                        {this.props.organization.unitSystem}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

OrganizationCard.propTypes = {
    organization: PropTypes.shape({
        id: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        creationDate: PropTypes.string,
        unitSystem: PropTypes.string.isRequired,
    })
}