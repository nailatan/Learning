import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import gameReducer from "./game.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
});
