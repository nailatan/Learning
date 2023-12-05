import { createSlice } from "@reduxjs/toolkit";

export const gameCountriesSlice = createSlice({
  name: "countriesGame",
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

export const { setContinent, setCountries, setAnswerFor } =
  gameCountriesSlice.actions;
export default gameCountriesSlice.reducer;
