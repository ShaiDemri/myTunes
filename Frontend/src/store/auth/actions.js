import {USER_LOGOUT, USER_LOGIN,USER_SIGNUP} from './types'

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}
export function userSignup(email, password, firstName, surName) {
    return {
        type: USER_SIGNUP,
        email,
        password,
        firstName,
        surName
    }
}

export function userLogin(email, password) {
    return {
        type: USER_LOGIN,
        email,
        password
    }
}