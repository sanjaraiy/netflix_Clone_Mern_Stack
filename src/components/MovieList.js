import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies,  searchMovie=false}) {
    
  return (
    <div className='px-8'>
         <h1 className={`${searchMovie ? "text-black" : "text-white" } text-3xl py-3`}>{title}</h1>
         <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
            <div className='flex items-center'>
              {
                movies?.map((movie)=> <MovieCard key={movie.id} posterPath = {movie.poster_path}></MovieCard>)
              }
            </div>
         </div>
    </div>
  )
}

export default MovieList