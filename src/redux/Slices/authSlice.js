import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;