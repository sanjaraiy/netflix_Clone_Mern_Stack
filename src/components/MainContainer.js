import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
  const movie = useSelector((store)=> store.movie?.nowPlayingMovies)
  if(!movie){ //---Early return in react---
    return;
  }
   
  console.log(movie);
  const {overview, id, title} = movie[4];
   
  // console.log(overview);
  // console.log(id);
  return (
    <div>
        <VideoTitle title={title} overview={overview}></VideoTitle>
        <VideoBackground  movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer