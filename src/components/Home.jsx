import React, {useEffect} from 'react';
import Slider from './Slider';
import MovieListing from './MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../redux/actions/movieAction';

const Home = ({token}) => {
    const dispatch =useDispatch()
    const { movies } = useSelector((state) => state.movie);
    

    useEffect(() => {
        
        dispatch(getAllMovies())

    }, [])

  return (
    <>
        {/* <div>
            <Slider/>
            <MovieListing />
        </div>

    </>
  )
}
export default Home;