import { createSlice } from "@reduxjs/toolkit";

export const PHASE_GAMMES = {
  PLAY: "Play",
  CORRECTION: "Correct",
};
export const MODES = {
  ASK_CAPITALS: "Capitals",
  ASK_COUNTRIES: "Countries",
};
export const gameCountriesSlice = createSlice({
  name: "countriesGame",
  initialState: {
    continentName: null,
    countries: [],
    mode: PHASE_GAMMES.ASK_CAPITALS,
    phase: PHASE_GAMMES.PLAY,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setPhase: (state, action) => {
      state.phase = action.payload;
    },
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
    reset: (state) => {
      state.countries = [];
      state.continentName = "";
      state.mode = PHASE_GAMMES.ASK_CAPITALS;
      state.phase = PHASE_GAMMES.PLAY;
    },
  },
});

export const {
  setContinent,
  setCountries,
  setAnswerFor,
  setMode,
  setPhase,
  reset,
} = gameCountriesSlice.actions;
export default gameCountriesSlice.reducer;
