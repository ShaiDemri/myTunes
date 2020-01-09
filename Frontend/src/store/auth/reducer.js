import * as types from './types'

const initialState = {
    isAuthorised: false,
};

export default function auth(state = initialState, action) {

    switch (action.type) {
        case types.USER_LOGOUT:
            return {
                ...state,
                isAuthorised: false
            };
        case types.USER_LOGIN:
            return {
                ...state,
                isAuthorised: true
            };
        default:
            return state
    }
}
