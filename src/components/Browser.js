import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MoiveContainer from './MoiveContainer';
import axios from 'axios';
import { now_Playing_Movie, options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

function Browser() {

  const user  = useSelector(store => store.app.user);
  const navigate = useNavigate();
  
  //my custom hooks
   useNowPlayingMovies();

  useEffect(()=>{
    if(!user){
      navigate("/");
   }
   
  },[])
  




 

  return (

    <div>
        <Header></Header>
        <div>
            <MainContainer></MainContainer>
            <MoiveContainer></MoiveContainer>
        </div>
    </div>
  )
}

export default Browser