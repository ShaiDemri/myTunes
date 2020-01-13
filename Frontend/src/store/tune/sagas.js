import {
    call,
    put,
    takeEvery,
    cancelled,
    select
} from 'redux-saga/effects'
import {
    GET_SELECTED_TUNE,
    GET_SELECTED_TUNE_SUCCESS,
    SELECTED_TUNE,
    SELECTED_TUNE_SUCCESS
} from './types'

import {callServer} from '../api'

export function* selectedTune(payload) {
    const {tune} = payload;
    try {
        yield put({type: SELECTED_TUNE_SUCCESS, tune});
        yield call(callServer, '/media/selected','post',tune);
        return tune
    } catch (error) {
        console.log(error);
        yield put({type: SELECTED_TUNE + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}

// worker saga
export function* getSelectedTune() {
    try {
        const tune = yield call(callServer, '/media/selected');
        yield put({type: GET_SELECTED_TUNE_SUCCESS, tune});
        return tune
    } catch (error) {
        console.log(error);
        yield put({type: GET_SELECTED_TUNE + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}

function* selectedTuneSaga(payload) {
    yield takeEvery(SELECTED_TUNE, selectedTune);
}
function* getSelectedTuneSaga() {
    yield takeEvery(GET_SELECTED_TUNE, getSelectedTune);
}
export const tuneSagas = [
    call(selectedTuneSaga),
    call(getSelectedTuneSaga)
];