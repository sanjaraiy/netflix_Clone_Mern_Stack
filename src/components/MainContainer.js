import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
  const movie = useSelector((store)=> store.movie?.nowPlayingMovies)
  if(!movie){ //early return in react
    return;
  }

  const {overview, id, title} = movie[4];

  return (
    <div>
        <VideoTitle title={title} overview={overview}></VideoTitle>
        <VideoBackground  moiveId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer