import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
import { RootState } from './store';

// Authentication Slice
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
})

export const { auth } = authSlice.actions
export const selectAuth = (state: RootState) => state.authenticated.value
const authReducer =  authSlice.reducer

export const store = configureStore({
    reducer: {
      authenticated: authReducer,
    }
  })
  
