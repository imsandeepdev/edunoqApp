import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SignUpState {
    isAPILoading: boolean;
    data: any;
    error: any;
}

const initialState: SignUpState = {
    isAPILoading: false,
    data: null,
    error: null,
};

const SignUpSlice = createSlice({
    name: 'SignUp',
    initialState: initialState,
    reducers: {
        fetchSignUpRequest(state,action: PayloadAction<{ name: string; mobile: string; password: string }>) {
            state.isAPILoading = true;
            state.error = null;
        },
        fetchSignUpSuccess(state, action: PayloadAction<any>) {
            state.isAPILoading = false;
            state.data = action.payload;
        },
        fetchSignUpFailure(state, action: PayloadAction<string>) {
            state.isAPILoading = false;
            state.error = action.payload;
        },
    },
});

export const {fetchSignUpRequest, fetchSignUpSuccess, fetchSignUpFailure} =
    SignUpSlice.actions;
export const SignUpReducer = SignUpSlice.reducer;
