// import createSagaMiddleware from 'redux-saga';
const createSagaMiddleware = require('redux-saga').default;

import {ConfigureStoreOptions, configureStore} from '@reduxjs/toolkit';
import { rootSaga } from './rootSaga';
import { demoReducer } from '../Slice/Demo/demoSlice';

let store: any = null;
const sagaMiddleware = createSagaMiddleware();
const getStore = () => {
    const options: ConfigureStoreOptions = {
        reducer: {
            demo: demoReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: false,
                serializableCheck: false,
            }).concat(sagaMiddleware),
        devTools: true,
    };
    if (store) {
        return store;
    }
    store = configureStore(options);
    sagaMiddleware.run(rootSaga);
    return store;
};

export {getStore, sagaMiddleware};
export type AppDispatch = ReturnType<typeof getStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof getStore>['getState']>;
export type AppStore = ReturnType<typeof getStore>;
export type AppGetState = () => RootState;
export type AppThunk<ReturnType = void> = (
    dispatch: AppDispatch,
    getState: AppGetState,
) => ReturnType;