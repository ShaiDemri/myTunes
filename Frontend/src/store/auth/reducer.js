import * as types from './types'

const initialState = {
    user: undefined
};

export default function auth(state = initialState, action) {

    switch (action.type) {
        case types.USER_LOGOUT_SUCCEEDED:
            return {
                ...state,
                user: undefined
            };
        case types.USER_LOGIN_SUCCEEDED:
            return {
                ...state,
                user: action.user
            };

        case types.USER_SIGNUP_SUCCEEDED:
            return {
                ...state,
                user: action.user
            };
        default:
            return state
    }
}
