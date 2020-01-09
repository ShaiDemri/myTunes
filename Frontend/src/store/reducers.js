import auth from './auth/reducer'
import { combineReducers } from 'redux'

export const appReducers = {
    auth,
};

export const rootReducer = combineReducers(appReducers);