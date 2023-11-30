import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    countryName: null,
  },
  reducers: {
    setCountry: (state, action) => {
      state.countryName = action.payload;
    },
  },
});

export const { setCountry } = gameSlice.actions;
export default gameSlice.reducer;
