import {
    call,
    put,
    takeEvery,
    cancelled
} from 'redux-saga/effects'
import {callServer} from '../api'

import {FETCH_MEDIA,FETCH_MEDIA_SUCCESS, FETCH_TOP10,FETCH_TOP10_SUCCESS} from './types'

// worker saga
export function* fetchMedia(payload) {
    console.log("fetchMedia*",payload);
    try {
        const media = yield call(callServer, '/media/' + payload.query);
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
// worker saga
export function* fetchTop10() {
    try {
        const top10 = yield call(callServer, '/media/top10' );
        console.log("top10 ",top10 );
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

function* fetchTop10Saga() {
    yield takeEvery(FETCH_TOP10, fetchTop10);
}

export const mediaSagas = [
    call(fetchMediaSaga),
    call(fetchTop10Saga),
];