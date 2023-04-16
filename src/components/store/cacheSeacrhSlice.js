import { createSlice } from "@reduxjs/toolkit";

const cacheSearchSlice = createSlice({
  name: "cacheSearch",
  initialState: {
    cachedResults: {},
  },
  reducers: {
    addCacheSearch: (state, action) => {
      state.cachedResults = { ...state.cachedResults, ...action.payload };
    },
  },
});

export const { addCacheSearch } = cacheSearchSlice.actions;

export default cacheSearchSlice.reducer;
