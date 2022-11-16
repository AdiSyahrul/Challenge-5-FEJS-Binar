import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    movies:[],
    movie:null,
    details:[],
    search:[],
    token: localStorage.getItem("token"),
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        moviesReducer : (state, action)=>{
            state.movies = action.payload;
        },
        detailReducer : (state, action)=>{
            state.details = action.payload;
        },
        searchReducer : (state, action)=>{
            state.search = action.payload;
        },
    },
});

export const { moviesReducer, detailReducer, searchReducer } = movieSlice.actions;
export default movieSlice.reducer;