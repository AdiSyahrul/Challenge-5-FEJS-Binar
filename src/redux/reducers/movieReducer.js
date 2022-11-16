import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movie: null,
  token: localStorage.getItem("token"),
};

const movieSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getAllMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
    getDetailMovieReducer: (state, action) => {
      state.movie = action.payload;
    },
  },
});


export const { getAllMoviesReducer, getDetailMovieReducer } = movieSlicer.actions;
export default movieSlicer.reducer;
