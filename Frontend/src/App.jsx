import React from 'react';
import config from './configs/config';
import configureStore from './store';
import Home from './containers/Home.jsx';

const Main = () => <Home appConfig={{ configureStore, ...config }} />;

export default Main
