import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogIn: true, user: "" },
  reducers: {
    logOut: (state, action) => void (state.isLogIn = false),
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
