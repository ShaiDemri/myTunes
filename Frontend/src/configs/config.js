import React from 'react'
import Loadable from 'react-loadable'
import CircularProgress from '@material-ui/core/CircularProgress';
import routes from './routes'

const Loading = () => <CircularProgress />;

const LPAsync = Loadable({
    loader: () => import('../pages/SignUp'),
    loading: Loading
});

const config = {
    routes,
    landingPage: LPAsync
};

export default config
