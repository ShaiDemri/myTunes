import * as types from './types'

const initialState = {
    isAuthorised: false,
    user: undefined
};

export default function auth(state = initialState, action) {

    switch (action.type) {
        case types.USER_LOGOUT_SUCCEEDED:
            return {
                ...state,
                isAuthorised: false
            };
        case types.USER_LOGIN_SUCCEEDED:
        case types.USER_SIGNUP_SUCCEEDED:
            return {
                ...state,
                isAuthorised: true,
                user: action.user.data.user
            };
        default:
            return state
    }
}
