import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MoiveContainer from './MoiveContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';
function Browser() {

  const user  = useSelector((state) => state.app.user);
  const toggle  = useSelector((state)=> state.movie.toggle);
  const navigate = useNavigate();
  
  //========== My custom hooks =============
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpComingMovies();

  useEffect(()=>{
    if(!user){
      navigate("/");
   }
   
  },[]);
  




 

  return (

    <div>
        <Header></Header>
        <div>
         {
          toggle ? <SearchMovie></SearchMovie> : (
            <> 
              <MainContainer></MainContainer>
              <MoiveContainer></MoiveContainer>
            </>
          )
         }
           
        </div>
    </div>
  )
}

export default Browser