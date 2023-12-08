import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import gameCountryReducer from "./countryGame.slice";
import managerReducer from "./managerGame.slice";
import verbsGameReducer from "./verbsGame.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    countriesGame: gameCountryReducer,
    manager: managerReducer,
    verbsGame: verbsGameReducer,
  },
});
