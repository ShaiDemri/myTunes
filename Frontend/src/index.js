import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => <CircularProgress />;

export const AppAsync = Loadable({
    loader: () => import('./App'),
    loading: Loading
});


ReactDOM.render(<AppAsync />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
