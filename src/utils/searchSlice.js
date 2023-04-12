import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload); //Merging into State
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
