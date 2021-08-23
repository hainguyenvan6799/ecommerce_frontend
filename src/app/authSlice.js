import { authApi } from "api/authenticationApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk("auth/getMe", (params, thunkApi) => {
  const result = authApi.currentUser();
  return result;
});

const initialState = {
  // user: {},
  user: null,
  loading: false,
  isAuthenticated: null,
  error: "",
  role: "GUEST",
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
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
      state.user = null;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
  extraReducers: {
    [getMe.pending]: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
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
        state.role = action.payload.user.role;
      }
      state.isAuthenticated = true;
    },
  },
});

const { reducer, actions } = authSlice;
export const { loginSuccess, loginFail, signupFail, logOut, setError } =
  actions;
export default reducer;
