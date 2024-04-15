import axios from 'axios'
import { popular_Movie } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/movieSlice';
import { options } from '../utils/constant';

async function usePopularMovies() {
    const dispatch = useDispatch();

   try {
      const res = await axios.get(popular_Movie,options);
      dispatch(getPopularMovies(res.data.results));
   } catch (error) {
      console.log(error);
   }
}

export default usePopularMovies