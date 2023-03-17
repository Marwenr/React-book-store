import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: { categories: "", ages: "", prices:"", language:"" },
  reducers: {
    searchByCategories: (state, action) => void(state.categories = action.payload),
    searchByAges: (state, action) => void(state.ages = action.payload),
    searchByPrices: (state, action) => void(state.prices = action.payload),
    searchByLanguage: (state, action) => void(state.language = action.payload),
  },
})

export const { searchByCategories, searchByAges, searchByPrices, searchByLanguage } = searchSlice.actions
export default searchSlice.reducer