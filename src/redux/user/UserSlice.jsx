import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    updateUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
    },
    deleteUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOut : (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false
    }
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserError,
  deleteUserError,
  deleteUserStart,
  deleteUserSuccess,
  signOut
} = userSlice.actions;

export default userSlice.reducer;
