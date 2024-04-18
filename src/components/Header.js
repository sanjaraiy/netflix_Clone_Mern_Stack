import axios from 'axios';
import React from 'react'

import { IoIosArrowDropdown } from "react-icons/io";
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import {useDispatch, useSelector} from "react-redux"
import { setToggle } from '../redux/movieSlice';

function Header() {

   const user = useSelector((store)=>store.app.user);
   const toggle = useSelector((store)=>store.movie.toggle);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const logoutHandler = async () => {
        
    try {

           const res = await axios.get(`${API_END_POINT}/logout`);
           if(res.data.success){
             toast.success(res.data.message);
           }
           dispatch(setUser(null));
           navigate("/");

         } catch (error) {
            console.log(error);
         }
   } 

   const toggleHandler = () =>{ 
       dispatch(setToggle());
   }

  return (
    <div className='absolute z-10 bg-gradient-to-b px-4 from-black flex w-[100%] items-center justify-between'>
        <img className='w-40' src='https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' alt='netflix'></img>
        {
          user && (
            <div className='flex items-center'>
              <IoIosArrowDropdown size={24} className='text-white' />
              <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
              <div className='ml-4'>
                  <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
                  <button  onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle?"Home" : "Search Movie"} </button>
              </div>
            </div>
          )
        }
        
    </div>
  )
}

export default Header