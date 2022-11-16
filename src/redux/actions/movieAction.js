import axios from "axios";
import { getAllMoviesReducer } from "../reducers/movieReducer";

export const getAllMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4154ff81a5f8bae0d54b1f74964cf7db&language=en-US&page=1");
    dispatch(getAllMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};