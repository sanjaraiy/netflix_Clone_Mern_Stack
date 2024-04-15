import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../redux/movieSlice';
import { now_Playing_Movie, options } from '../utils/constant';

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();

    try {
      
       const res  = await axios.get(now_Playing_Movie,options);
       dispatch(getNowPlayingMovies(res.data.results));
       
     
    } catch (error) {
        console.log(error);
    }


 }

 export default useNowPlayingMovies;