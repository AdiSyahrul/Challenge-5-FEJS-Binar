import axios from "axios";
import { moviesReducer, detailReducer,searchReducer } from "./reducer";
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=5eda277be8430a944c1a666b99c3d019";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=5eda277be8430a944c1a666b99c3d019&query";
const API_IMG="https://image.tmdb.org/t/p/w500/";

export const getAllMovies = () => async (dispatch) =>{
    try{
        const { data } = await axios.get(API_URL);
        dispatch(moviesReducer(data));
    } catch (error){
        throw error;
    }
};

// export const getAllMovies = createAsyncThunk('movie/getAllMovies', ()=>{
//     return axios
//     .get(API_URL)
//     .then((response)=>response.data)
// })

export const getSearch = () => async (dispatch) =>{
    try{
        const { data } = await axios.get(API_SEARCH);
        dispatch(searchReducer(data));
    } catch (err){
        throw err;
    }
};

export const getAllDetails = () => async (dispatch) =>{
    try{
        const { data } = await axios.get(API_IMG);
        dispatch(detailReducer(data));
    } catch (err){
        throw err;
    }
};