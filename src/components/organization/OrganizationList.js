import React, { PureComponent, Fragment } from "react";

import { OrganizationCard } from './organizationCard/OrganizationCard';

export class OrganizationList extends PureComponent {

    render() {
        return (
            <Fragment>
                <OrganizationCard></OrganizationCard>
                <OrganizationCard></OrganizationCard>
                <OrganizationCard></OrganizationCard>
            </Fragment>);
    }
}