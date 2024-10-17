import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("darkMode") === "false";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
