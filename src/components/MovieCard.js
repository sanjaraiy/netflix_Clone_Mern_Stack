import React from 'react'
import { Banner_url } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';

function MovieCard({posterPath}) {
   
  const dispatch = useDispatch();


   if(posterPath === null) return null;

   const handleOpen = () => {
      dispatch(setOpen(true));
   }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
        <img src={`${Banner_url}/${posterPath}`} alt='movie-poster'></img>
    </div>
  )
}

export default MovieCard