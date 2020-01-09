import React from 'react'
import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router'

export const RestrictedRoute = ({type, component: Component, fallbackComponent: FallbackComponent = false, ...rest}) => {
    const isAuthorised = useSelector(state => state.auth.isAuthorised);
    return (
        <Route
            {...rest}
            render={props => {
                if ((isAuthorised && type === 'private') || (!isAuthorised && type === 'public')) {
                    return <Component {...props} />
                } else if (FallbackComponent) {
                    return <FallbackComponent {...props} />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname:
                                    type === 'private' ? '/signup' : props.location.state ? props.location.state.from.pathname : '/',
                                search: `from=${props.location.pathname}`,
                                state: {from: props.location}
                            }}
                        />
                    )
                }
            }}
        />
    )
};


export default RestrictedRoute;
