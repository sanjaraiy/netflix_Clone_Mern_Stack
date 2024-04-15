import axios from "axios";
import { options, upComing_Movie } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getUpComingMovies } from "../redux/movieSlice";

async function useUpComingMovies (){
    const dispatch = useDispatch();

  try {
    const res = await axios.get(upComing_Movie,options);
    dispatch(getUpComingMovies(res.data.results));
    
  } catch (error) {
      console.log(error);
  }
}

export default useUpComingMovies;