import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import CircularProgress from '@material-ui/core/CircularProgress';
import config from '../configs/config'
import configureStore from '../store'

const Loading = () => <CircularProgress />;

export const RootAsync = Loadable({
    loader: () => import('./Root'),
    loading: Loading
});


const App = ({ appConfig }) => {
    const store = appConfig && appConfig.configureStore ? appConfig.configureStore() : configureStore();
    const configs = { ...config, ...appConfig };

    return (
            <Provider store={store}>
                <BrowserRouter>
                        <Switch>
                            <Route>
                                <RootAsync appConfig={configs} />
                            </Route>
                        </Switch>

                </BrowserRouter>
            </Provider>
    )
};

export default App
