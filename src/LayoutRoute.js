import React from 'react';
import { Route } from 'react-router-dom';
import Header  from './Header';


function LayoutRoute(props) {
    return (
        <React.Fragment>
            <Header {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
        </React.Fragment>
    )
}

export default LayoutRoute;