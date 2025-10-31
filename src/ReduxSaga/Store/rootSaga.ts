import { all, fork } from 'redux-saga/effects';
import { watchFetchDemo } from '../Saga/Demo/demoSaga';
import { watchFetchSignUp } from '../Saga/SignUp/SignUpSaga';

export function* rootSaga() {
    yield all([
        fork(watchFetchDemo),
        fork(watchFetchSignUp),
    ]);
}