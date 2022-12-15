import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'types/redux';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false,
  },
  reducers: {
    auth: (state) => {
      state.value = !state.value;
    },
  }
});

export const { auth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authenticated.value;
export const authReducer =  authSlice.reducer;