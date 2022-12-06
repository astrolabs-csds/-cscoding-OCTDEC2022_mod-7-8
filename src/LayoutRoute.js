import React from 'react';
import { Route } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';


function LayoutRoute(props) {
    return (
        <React.Fragment>
            <ResponsiveAppBar {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
        </React.Fragment>
    )
}

export default LayoutRoute;