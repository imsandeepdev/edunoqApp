import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDemoRequest, fetchDemoSuccess, fetchDemoFailure } from '../../Slice/Demo/demoSlice';
import { request } from '../../../Services/request';

function* fetchDemoWorker() {
  try {
    const res: { success: boolean; response: any } = yield call(request, {
      method: 'GET',
      endpoint: 'posts/1',
    });

    console.log('API Response:==>Demo Res', res);

    if (res.success) {
      yield put(fetchDemoSuccess(res.response));
    } else {
      yield put(fetchDemoFailure(res.response));
    }
  } catch (error: any) {
    yield put(fetchDemoFailure(error.message || 'Unexpected error'));
  }
}

export function* watchFetchDemo() {
  yield takeLatest(fetchDemoRequest.type, fetchDemoWorker);
}
