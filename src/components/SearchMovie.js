import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_URL} from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import setSearchMovieDetails from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';


function SearchMovie() {
  
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch  = useDispatch();
  const isLoading = useSelector((store)=>store.app.isLoading);
  const {movieName,searchedMovie} = useSelector((store)=>store.search);
  


  const submitHandler = async (e) => {
       e.preventDefault();
       dispatch(setLoading(true))
       
       try {
          const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,options);
          const movies = res?.data?.results;
         dispatch(setSearchMovieDetails({searchedMovie, movies}));
       } catch (error) {
          console.log(error);
       } finally{
          dispatch(setLoading(false));
       }
       setSearchMovie("");
  }

  return (
    <>
      <div className='flex  justify-center pt-[10%] w-[100%]'>
        <form action="" onSubmit={submitHandler} className='w-[50%]'>
            <div className='flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]'>
            <input  value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}} className='w-full outline-none rounded-md text-lg'  type="text" placeholder='Search Movies...' />
            <button className='bg-red-800 text-white rounded-md px-4 py-2 ml-2'>{isLoading ? "loading..." : Search}</button>
             </div>
        </form>
    </div>
        <div>
        <h1>{movieName}</h1>
         {
          searchMovie && searchedMovie.map((item)=>{
            return <h1 key={item.id}>{item}</h1>
          })
         }
        </div>
        <MovieList title = {movieName} searchMovie={true}  movies = {searchedMovie}></MovieList>
    </>
  )
}

export default SearchMovie