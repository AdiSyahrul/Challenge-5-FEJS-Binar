import React, {useEffect, useState} from "react";
import "./MovieListing.css";
import { useParams } from "react-router-dom";
import MovieBox from "./MovieBox";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

const MovieListing = () => {

    const [movieList, setMovieList] = useState ([])
    const {type} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getAllMovies()
        getData()
    }, [])

    useEffect(() => {
        getData()
    },[type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=5eda277be8430a944c1a666b99c3d019&language=en-US&page=1`)
          .then((res) => res.json())
          .then((data) => setMovieList(data.results));
    }
    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "Popular Movie").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <MovieBox movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieListing 