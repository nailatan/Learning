import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    continentName: null,
  },
  reducers: {
    setContinent: (state, action) => {
      state.continentName = action.payload;
    },
  },
});

export const { setContinent } = gameSlice.actions;
export default gameSlice.reducer;
