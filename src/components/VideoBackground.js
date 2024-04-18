import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

function VideoBackground({movieId}) {
   const trailer = useSelector((store)=>store.movie.trailerMovie)
   console.log(trailer);
  //custom hook
  useMovieById(movieId)
  return (
    <div className='w-screen'>
      <iframe 
       
        className='w-screen aspect-video'
        // src={`https://www.youtube.com/embed/${trailer.key}?si=LaQ3hX3mD1hf4yeP&autoplay=1&mute=1`} 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen
        controls
      ></iframe>

    </div>
  )
}

export default VideoBackground