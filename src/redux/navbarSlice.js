import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    home: "active",
    about: "",
    contact: "",
    project: "",
  },
  reducers: {
    active: (state, action) => {
      state.home = action.payload.home;
      state.about = action.payload.about;
      state.project = action.payload.project;
      state.contact = action.payload.contact;
    },
  },
});

export const { active } = navbarSlice.actions;
export default navbarSlice.reducer;
