import React, {useState,useEffect} from 'react';
import Slider from './Slider';
import MovieBox from './MovieBox';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=5eda277be8430a944c1a666b99c3d019";

function Home (){
    const [movies, setMovies]=useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
        console.log(data);
        setMovies(data.results);
        })
    }, [])

  return (
    <>
        <div>
            <Slider/>
        </div>
        <div>
        <h1 className='p-4 m-1'>Popular Movies</h1>
            <div className="container">
            <div className="grid">
            {movies.map((movieReq)=>
            <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
        </div>
        </div>
    </>
  )
}
export default Home;