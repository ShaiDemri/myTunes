import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'
// import api from '../api'

import { USER_LOGOUT, USER_LOGIN, USER_SIGNUP } from './types'

function* login(action) {
    try {
        //   const result = yield call(Api.login, action.payload.userId);
        let user = null;
        yield put({
            type: USER_LOGIN+"_SUCCEEDED",
            user: user
        });
    } catch (e) {
        yield put({
            type: USER_LOGIN+"_FAILED",
            message: e.message
        });
    }
}
function* signUp(action) {
    try {
        //   const result = yield call(Api.login, action.payload.userId);
        let user = null;
        yield put({
            type: USER_SIGNUP+"_SUCCEEDED",
            user: user
        });
    } catch (e) {
        yield put({
            type: USER_SIGNUP+"_FAILED",
            message: e.message
        });
    }
}

function* logout(action) {
    try {
        let user = null;
        yield put({
            type: USER_LOGOUT+"_SUCCEEDED",
            user: user
        });
    } catch (e) {
        yield put({
            type: USER_LOGOUT+"_FAILED",
            message: e.message
        });
    }
}

function* loginSaga() {
    yield takeEvery(USER_LOGIN, login);
}
function* signupSaga() {
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