import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import linksSlice from "./linksSlice";

const store = configureStore({
  reducer: { authData: authSlice, linksData: linksSlice },
});

export default store;
