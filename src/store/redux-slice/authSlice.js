import { createSlice } from "@reduxjs/toolkit";

const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const clearUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    isLoggedIn: !!getUserFromLocalStorage(),
  },
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      const user = { username, password };
      saveUserToLocalStorage(user);
      state.user = user;
      state.isLoggedIn = false;
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const savedUser = getUserFromLocalStorage();

      if (
        savedUser &&
        savedUser.username === username &&
        savedUser.password === password
      ) {
        state.isLoggedIn = true;
        state.user = savedUser;
      } else {
        state.isLoggedIn = false;
        state.user = null;
      }
    },
    logout: (state) => {
      clearUserFromLocalStorage();
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
