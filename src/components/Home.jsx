import React, {useEffect, useState} from 'react';
import Slider from './Slider';
import { useDispatch, useSelector} from 'react-redux';
import { getAllMovies } from '../redux/action';
import MovieListing from './MovieListing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=5eda277be8430a944c1a666b99c3d019";

const Home = ({token})=>{    
    // const [movies, setMovies]=useState([]);
    // useEffect(() => {
    //     fetch(API_URL)
    //     .then((res)=>res.json())
    //     .then(data=>{
    //     console.log(data);
    //     setMovies(data.results);
    //     })
    // }, [])
    const dispatch = useDispatch();
    const {movies} = useSelector((state)=>state.movie)
    useEffect(()=>{
        dispatch(getAllMovies());
    },[]);
  return (
    <>
        {/* <div>
            <Slider/>
        </div>
        <div>
            <MovieListing/>
        </div> */}
        <div className="poster">
          <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
            {movies?.results?.map((movie) => (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ""} </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <FontAwesomeIcon icon="fa-solid fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                </div>
              </Link>
            ))}
          </Carousel>
          <MovieListing />
        </div>

    </>
  )
}
export default Home;