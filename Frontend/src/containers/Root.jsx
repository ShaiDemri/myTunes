import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import {useSelector, shallowEqual} from 'react-redux'
import {createBrowserHistory} from 'history'
import SearchTunes from "../pages/SearchTunes";
import SignUp from "../pages/SignUp";
import ButtonAppBar from "./AppBar";

const Root = () => {
    const history = createBrowserHistory();
    const isAuthorised = useSelector(state => state.auth.isAuthorised, shallowEqual);

    return (<>
            <CssBaseline/>
            <ButtonAppBar isAuthorised={isAuthorised}/>
            <Router history={history}>
                <Switch>
                    {(isAuthorised)
                        ? <Route component={SearchTunes}/>
                        : <Route component={SignUp}/>
                    }
                </Switch>
            </Router>
        </>
    )
};
export default Root;