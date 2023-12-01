import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    continentName: null,
    countries: [],
  },
  reducers: {
    setContinent: (state, action) => {
      state.continentName = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setAnswerFor: (state, action) => {
      let countries = state.countries.map((country) => {
        if (country._id === action.payload._id) {
          return { ...country, answer: action.payload.value };
        }
        return { ...country };
      });

      state.countries = countries;
    },
  },
});

export const { setContinent, setCountries, setAnswerFor } = gameSlice.actions;
export default gameSlice.reducer;
