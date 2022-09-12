import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shortenerAPI } from "../services/api";
import { transformLinksData } from "./helpers/transformData";

export const squeezeAsync = createAsyncThunk(
  "/squeeze",
  async (params, { rejectWithValue }) => {
    try {
      const response = await shortenerAPI.squeeze({ params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const statisticsAsync = createAsyncThunk(
  "/statistics",
  async (params, { rejectWithValue }) => {
    try {
      const response = await shortenerAPI.statistics({ params });
      const transformedData = transformLinksData(response.data);
      return transformedData;
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

const initialState = {
  longLink: "",
  shortLink: "",
  counter: 0,
  stats: [],
  isLoading: false,
  skip: 0,
};

export const squeezeSlice = createSlice({
  name: "linksData",
  initialState,
  reducers: {},
  extraReducers: {
    [squeezeAsync.fulfilled]: (state, action) => {
      state.shortLink = action.payload.short;
      state.longLink = action.payload.target;
      state.counter = action.payload.counter;
    },
    [squeezeAsync.rejected]: setError,

    [statisticsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [statisticsAsync.fulfilled]: (state, action) => {
      state.stats = action.payload;
      state.isLoading = false;
    },
    [statisticsAsync.rejected]: setError,
  },
});

export const {} = squeezeSlice.actions;

export default squeezeSlice.reducer;
