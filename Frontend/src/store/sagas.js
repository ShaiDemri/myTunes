import { authSagas } from './auth/sagas';
import { mediaSagas } from './media/sagas';
import { tuneSagas } from './tune/sagas';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...authSagas,
        ...mediaSagas,
        ...tuneSagas
    ])
}