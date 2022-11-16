import { useState, useEffect } from 'react';
import {useDispatch ,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getAllMovies } from '../redux/action';
import { moviesReducer } from '../redux/reducer';
import MovieBox from './MovieBox';
const MovieListing = ()=>{
    // const movies = useSelector(moviesReducer);
    // let renderMovies = "";
    // renderMovies= movies.Response === "True" ? (
    //     movies.Search.map((movieReq)=>(
    //         <MovieBox key={movieReq.id}{...movieReq}/>
    //     ))
    // ) : (
    //     <div className='movies-error'>
    //         <h3>{movies.Error}</h3>
    //     </div>
    // );

    const [movieList, setMovieList]=useState([])
    const dispatch = useDispatch();
    const {type} = useParams();

    useEffect(()=>{
        getAllMovies()
        getData()
    })

    useEffect(()=>{
        getData()
    }, [type])

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=5eda277be8430a944c1a666b99c3d019`)
        .then((res)=> res.json())
        .then((data)=>setMovieList(data.results));
    }

    return (
        <div className='movie-listing'>
            {/* <h1 className='p-4 m-1'>Popular Movies</h1>
            <div className='movie-container'></div> */}
            <h2 className='list-title'>{(type ? type : "Popular Movie").toUpperCase()}</h2>
            <div className='list-cards'>
                {movieList.map(movie=>(
                    <MovieBox movie={movie}/>
                ))}
            </div>
        </div>
    );
};
export default MovieListing;