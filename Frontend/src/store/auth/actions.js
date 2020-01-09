import {USER_LOGOUT, USER_LOGIN,USER_SIGNUP} from './types'

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}
export function userSignup() {
    return {
        type: USER_SIGNUP
    }
}

export function userLogin() {
    return {
        type: USER_LOGIN
    }
}