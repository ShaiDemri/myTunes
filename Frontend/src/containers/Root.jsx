import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useSelector, shallowEqual} from 'react-redux'
import {createBrowserHistory} from 'history'
import SearchTunes from "../pages/SearchTunes";
import Tune from "../pages/Tune";
import SignUp from "../pages/SignUp";
import PageNotFound from "../pages/PageNotFound";
import ButtonAppBar from "./AppBar";

const Root = () => {
    const history = createBrowserHistory();
    const isAuthorised = useSelector(state => state.auth.user, shallowEqual) !== undefined;

    return (<>
            <CssBaseline/>
            <BrowserRouter history={history}>
                <>
                    <ButtonAppBar isAuthorised={isAuthorised}/>
                    <Switch>
                        {(isAuthorised)
                            ? <Switch>
                                <Route path="/tune/:tuneId" component={Tune}/>
                                <Route path="/searchTune" component={SearchTunes}/>
                                <Route path="/" component={SearchTunes}/>
                                <Route path="*" component={PageNotFound}/>
                            </Switch>
                            : <Route component={SignUp}/>
                        }
                    </Switch>
                </>
            </BrowserRouter>
        </>
    )
};
export default Root;