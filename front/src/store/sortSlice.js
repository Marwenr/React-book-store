import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: { gridList: true },
  reducers: {
    sortGrid: (state, action) => void(state.gridList = true),
    sortList: (state, action) => void(state.gridList = false),
  },
});

export const { sortGrid, sortList } = sortSlice.actions;
export default sortSlice.reducer;
