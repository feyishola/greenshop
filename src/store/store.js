import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux-slice/themeslice";
import authReducer from "./redux-slice/authSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});

export default store;
