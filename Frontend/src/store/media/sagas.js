import {
    call,
    put,
    takeEvery,
    cancelled,
    select
} from 'redux-saga/effects'
import {
    FETCH_MEDIA,
    FETCH_MEDIA_SUCCESS,
    FETCH_TOP10,
    FETCH_TOP10_SUCCESS,
    SELECTED_TUNE,
    SELECTED_TUNE_SUCCESS
} from './types'

import {callServer} from '../api'

const getUserEmail = state => state.auth.user.email;

// worker saga
export function* fetchMedia(payload) {
    const email = yield select(getUserEmail);
    try {
        const media = yield call(callServer, '/media/' + payload.query,'get',undefined,{"email":email});
        yield put({type: FETCH_MEDIA_SUCCESS, media});
        return media
    } catch (error) {
        console.log(error);
        yield put({type: FETCH_MEDIA + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}

export function* selectedTune(payload) {
    const {tune} = payload;
    yield put({type: SELECTED_TUNE_SUCCESS, tune});
}
// worker saga
export function* fetchTop10() {
    const email = yield select(getUserEmail);
    try {
        const top10 = yield call(callServer, '/media/top10','get',undefined,{"email":email});
        yield put({type: FETCH_TOP10_SUCCESS, top10});
        return top10
    } catch (error) {
        console.log(error);
        yield put({type: FETCH_TOP10 + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}

function* fetchMediaSaga(payload) {
    yield takeEvery(FETCH_MEDIA, fetchMedia);
}

function* selectedTuneSaga(payload) {
    yield takeEvery(SELECTED_TUNE, selectedTune);
}

function* fetchTop10Saga() {
    yield takeEvery(FETCH_TOP10, fetchTop10);
}

export const mediaSagas = [
    call(fetchMediaSaga),
    call(selectedTuneSaga),
    call(fetchTop10Saga),
];