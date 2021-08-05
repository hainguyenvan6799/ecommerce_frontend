import { authApi } from "api/authenticationApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk("auth/getMe", (params, thunkApi) => {
  const result = authApi.currentUser();
  return result;
});

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: null,
  error: "",
  role: "GUEST",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.error;
    },
    signupFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.error;
    },
    logOut: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
  extraReducers: {
    [getMe.pending]: (state, action) => {
      state.loading = true;
      state.isAuthenticated = null;
    },
    [getMe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.user) {
        state.user = action.payload.user;
      }

      state.isAuthenticated = true;
    },
  },
});

const { reducer, actions } = authSlice;
export const { loginSuccess, loginFail, signupFail, logOut, setError } =
  actions;
export default reducer;
