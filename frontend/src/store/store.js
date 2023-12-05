import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import gameReducer from "./countryGame.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    countriesGame: gameReducer,
  },
});
