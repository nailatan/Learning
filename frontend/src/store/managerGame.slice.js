import { createSlice } from "@reduxjs/toolkit";

export const controlGameSlice = createSlice({
  name: "manager",
  initialState: {
    mode: null,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = controlGameSlice.actions;
export default controlGameSlice.reducer;
