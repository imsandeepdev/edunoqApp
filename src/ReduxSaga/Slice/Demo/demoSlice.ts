import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface DemoState {
    isAPILoading: boolean;
    data: any;
    error: any;
}

const initialState: DemoState = {
    isAPILoading: false,
    data: null,
    error: null,
};

const demoSlice = createSlice({
    name: 'demo',
    initialState: initialState,
    reducers: {
        fetchDemoRequest(state) {
            state.isAPILoading = true;
            state.error = null;
        },
        fetchDemoSuccess(state, action: PayloadAction<any>) {
            state.isAPILoading = false;
            state.data = action.payload;
        },
        fetchDemoFailure(state, action: PayloadAction<any>) {
            state.isAPILoading = false;
            state.error = action.payload;
        },
    },
});

export const {fetchDemoRequest, fetchDemoSuccess, fetchDemoFailure} =
    demoSlice.actions;
export const demoReducer = demoSlice.reducer;
