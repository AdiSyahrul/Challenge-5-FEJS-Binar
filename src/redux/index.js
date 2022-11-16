import { combineReducers } from "@reduxjs/toolkit";
import reducer, { moviesReducer } from "./reducer";

export default combineReducers({
    movie : moviesReducer,
});