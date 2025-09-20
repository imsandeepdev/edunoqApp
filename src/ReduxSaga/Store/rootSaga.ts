import { all, fork } from 'redux-saga/effects';
import { watchFetchDemo } from '../Saga/Demo/demoSaga';

export function* rootSaga() {
    yield all([
        fork(watchFetchDemo),
    ]);
}