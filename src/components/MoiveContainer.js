import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function MoiveContainer() {

    const movie = useSelector((store) => store.movie);
    // console.log(movie);

  return (
    <div className='bg-black'>
        <div className='  z-10'>
          <MovieList title = {"Popular Movies"} movie = {movie.popularMovies}></MovieList>
          <MovieList title = {"Now Playing Movies"} movie = {movie.nowPlayingMovies}></MovieList>
          <MovieList title = {"Top Rated Movies"} movie = {movie.topRatedMovies}></MovieList>
          <MovieList title = {"Upcoming Movies"} movie = {movie.upComingMovies}></MovieList>
        </div>
    </div>
  )
}

export default MoiveContainer