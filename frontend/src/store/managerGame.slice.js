import { createSlice } from "@reduxjs/toolkit";
import { MODE_GAMES } from "../constants";

export const controlGameSlice = createSlice({
  name: "manager",
  initialState: {
    mode: MODE_GAMES.LOGIN,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = controlGameSlice.actions;
export default controlGameSlice.reducer;
