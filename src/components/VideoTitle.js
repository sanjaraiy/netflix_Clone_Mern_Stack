import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
function VideoTitle({title, overview}) {
  return (
    <div className='w-screen aspect-video   absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-4 '>{overview}</p>
        <div className='mt-8 flex gap-2'>
            <button className='flex items-center gap-1 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'> <CiPlay1 size={22} /> <span>Play</span></button>
            <button className=' flex items-center gap-1 px-6 py-2  bg-gray-500 bg-opacity-50 text-black rounded-md'><CiCircleInfo size={22} /> <span>Watch more</span></button>
        </div>
    </div>
  )
}

export default VideoTitle