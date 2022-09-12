import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { shortenerAPI } from "../services/api";

export const registerAsync = createAsyncThunk(
  "/registerAsync",
  async (params, { rejectWithValue }) => {
    try {
      const response = await shortenerAPI.register({
        username: params.username,
        password: params.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "/login",
  async (params, { rejectWithValue }) => {
    try {
      const response = await shortenerAPI.login({
        username: params.username,
        password: params.password,
      });
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const setError = (state, action) => {
  state.isLoading = false;
  state.hasError.status = "rejected";
  state.hasError.error = action.payload;
};

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  currentUser: {},
  isAuth: false,
  isLoading: false,
  hasError: null,
  userToken,
};

export const authSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.currentUser = {};
      localStorage.removeItem("token");
      state.isAuth = false;
      state.userToken = null;
    },
  },
  extraReducers: {
    [registerAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerAsync.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [registerAsync.rejected]: setError,

    [loginAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginAsync.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.isAuth = true;
      state.userToken = action.payload.access_token;
    },
  },
});

export const token = (state) => state.authData.token;
export const tokenSelector = createSelector((state) => state.authData.token);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
