import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authIsLoading: false,
  authError: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.authIsLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authIsLoading = false;
      state.authError = null;
    },
    [register.rejected](state, action) {
      state.authError = action.payload;
      state.authIsLoading = false;
    },
    [logIn.pending](state) {
      state.authIsLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authIsLoading = false;
      state.authError = null;
    },
    [logIn.rejected](state, action) {
      state.authError = action.payload;
      state.authIsLoading = false;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.authIsLoading = false;
      state.authError = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.authIsLoading = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.authIsLoading = false;
      state.authError = null;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.authError = action.payload;
      state.authIsLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
