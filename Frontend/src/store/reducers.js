import auth from './auth/reducer'
import media from './media/reducer'
import tune from './tune/reducer'
import { combineReducers } from 'redux'
import {USER_LOGOUT} from './auth/types'

const appReducer = combineReducers({
    auth,
    media,
    tune
});

const rootReducers = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }
    return appReducer(state, action)
};
 export const rootReducer = rootReducers;
