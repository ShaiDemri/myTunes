import auth from './auth/reducer'
import media from './media/reducer'
import { combineReducers } from 'redux'

export const appReducers = {
    auth,
    media,
};

export const rootReducer = combineReducers(appReducers);