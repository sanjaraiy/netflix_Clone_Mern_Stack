import React from 'react'
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';
import axios from 'axios';

async function useMovieById(movieId) {
   const dispatch = useDispatch();

try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
    console.log(res);
    const trailer = res?.data?.results?.filter((item)=>{
        return item.type === "Trailer";
    })
    dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));

  } catch (error) {
       console.log(error);
  }
}

export default useMovieById