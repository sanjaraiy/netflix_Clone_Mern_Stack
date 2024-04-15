import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movie}) {
    // console.log(movie);
  return (
    <div className='px-8'>
         <h1 className='text-3xl py-3 text-white'>{title}</h1>
         <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
            <div className='flex items-center'>
              {
                movie.map((movie)=> <MovieCard key={movie.id} posterPath = {movie.poster_path}></MovieCard>)
              }
            </div>
         </div>
    </div>
  )
}

export default MovieList