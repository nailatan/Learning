import { createSlice } from "@reduxjs/toolkit";
import { TENSE_VERBS } from "../constants";

export const PHASE_GAMMES = {
  PLAY: "Play",
  CORRECTION: "Correct",
};

export const gameVerbsSlice = createSlice({
  name: "verbsGame",
  initialState: {
    verbs: [],
    phase: PHASE_GAMMES.PLAY,
  },
  reducers: {
    setPhase: (state, action) => {
      state.phase = action.payload;
    },
    setVerbs: (state, action) => {
      state.verbs = action.payload;
    },
    setAnswerFor: (state, action) => {
      let { _id, answer } = action.payload;
      let verbsGameModif = state.verbs.map((v) => {
        if (v._id === _id) {
          return { ...v, answer };
        }
        return { ...v };
      });
      state.verbs = verbsGameModif;
    },
  },
});

export const { setVerbs, setAnswerFor, setPhase } = gameVerbsSlice.actions;
export default gameVerbsSlice.reducer;
