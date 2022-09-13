import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import { isAuthenticated } from './index';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    //props means component passed down to this private route component
    <Route {...rest} render={props => isAuthenticated() ? (
        <Component {...props} />
        ) 
        : (
            <Navigate to={{
                pathname: '/signin',
                state: {from:props.location}
            }}/>
        )}/>
  )
}

export default PrivateRoute