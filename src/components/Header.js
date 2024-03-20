import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <div className='absolute z-10 bg-gradient-to-b px-4 from-black flex w-[100%] items-center justify-between'>
        <img className='w-40' src='https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' alt='netflix'></img>
        <div className='flex items-center'>
            <IoIosArrowDropdown size={24} className='text-white' />
            <h1 className='text-lg font-medium text-white'>Sanjay</h1>
            <div className='ml-4'>
                <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
                <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>
        </div>
    </div>
  )
}

export default Header