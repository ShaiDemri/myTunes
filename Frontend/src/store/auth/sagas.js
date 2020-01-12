import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'
import {callServer} from '../api'

import {USER_LOGOUT, USER_LOGIN, USER_SIGNUP,USER_LOGIN_SUCCEEDED,USER_LOGOUT_SUCCEEDED,USER_SIGNUP_SUCCEEDED} from './types'

function* login(payload) {
    const {email, password}= payload;
    try {
        const user = yield call(callServer, '/user/login/','post',{email, password});
        yield put({
            type: USER_LOGIN_SUCCEEDED,
            user: user
        });
    } catch (e) {
        yield put({
            type: USER_LOGIN + "_FAILED",
            message: e.message
        });
    }
}

function* signUp(payload) {
    const {email, password, firstName, surName}= payload;
    try {
        const user = yield call(callServer, '/user/signup/','post',{email, password, firstName, surName} );
        yield put({
            type: USER_SIGNUP_SUCCEEDED,
            user: user
        });
    } catch (e) {
        yield put({
            type: USER_SIGNUP + "_FAILED",
            message: e.message
        });
    }
}

function* logout() {
    try {

        const user = yield call(callServer, '/user/logout/','post');
        yield put({
            type: USER_LOGOUT_SUCCEEDED,
            user: null
        });
    } catch (e) {
        yield put({
            type: USER_LOGOUT + "_FAILED",
            message: e.message
        });
    }
}

function* loginSaga(payload) {
    yield takeEvery(USER_LOGIN, login);
}

function* signupSaga(payload) {
    yield takeEvery(USER_SIGNUP, signUp);
}

function* logoutSaga() {
    yield takeEvery(USER_LOGOUT, logout);
}

export const authSagas = [
    call(loginSaga),
    call(signupSaga),
    call(logoutSaga)
];