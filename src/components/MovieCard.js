import React from 'react'
import { Banner_url } from '../utils/constant'

function MovieCard({posterPath}) {
  return (
    <div className='w-48 pr-2'>
        <img src={`${Banner_url}/${posterPath}`} alt='movie-poster'></img>
    </div>
  )
}

export default MovieCard