/* eslint-disable react/jsx-key */
import React from 'react'
import RestrictedRoute from '../containers/RestrictedRoute'
import Loadable from 'react-loadable'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => <CircularProgress />;

const AsyncSignUp = Loadable({ loader: () => import('../pages/SignUp'), loading: Loading});
const AsyncSearchTunes = Loadable({ loader: () => import('../pages/SearchTunes'), loading: Loading });
const AsyncTune = Loadable({ loader: () => import('../pages/Tune'), loading: Loading });
const AsyncPageNotFound = Loadable({ loader: () => import('../pages/PageNotFound'), loading: Loading });


const routes = [
    <RestrictedRoute type="public" path="/signup" exact component={AsyncSignUp} />,
    <RestrictedRoute type="private" path="/tune/:tuneId" component={AsyncTune} />,
    <RestrictedRoute type="private" path="/searchTune" exact component={AsyncSearchTunes} />,
    <RestrictedRoute type="public" path = "/" component={AsyncPageNotFound} />
];

export default routes
