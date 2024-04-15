import React from 'react'

function VideoBackground() {
  return (
    <div className='w-screen'>
      <iframe 
       
        className='w-screen aspect-video'
        src="https://www.youtube.com/embed/0qrpUtSjG-M?si=LaQ3hX3mD1hf4yeP&autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen
        controls
      ></iframe>

    </div>
  )
}

export default VideoBackground