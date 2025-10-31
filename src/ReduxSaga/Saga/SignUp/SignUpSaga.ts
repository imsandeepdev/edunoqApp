import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSignUpRequest, fetchSignUpSuccess, fetchSignUpFailure } from '../../Slice/SignUp/SignUpSlice';
import { request } from '../../../Services/request';
import { PayloadAction } from '@reduxjs/toolkit';

interface SignUpPayload {
  name: string;
  mobile: string;
  password: string;
}

function* fetchSignUpWorker(action: PayloadAction<SignUpPayload>) {
  try {
    const res: { success: boolean; response: any } = yield call(request, {
      method: 'GET',
      endpoint: 'posts/1', 
      data: {
        name: action.payload.name,
        mobile: action.payload.mobile,
        password: action.payload.password,
      },
    });

    console.log('API Response:==>SignUp Res', res);

    if (res.success) {
      yield put(fetchSignUpSuccess(res.response));
    } else {
      yield put(fetchSignUpFailure(res.response));
    }
  } catch (error: any) {
    yield put(fetchSignUpFailure(error.message || 'Unexpected error'));
  }
}

export function* watchFetchSignUp() {
  yield takeLatest(fetchSignUpRequest.type, fetchSignUpWorker);
}
