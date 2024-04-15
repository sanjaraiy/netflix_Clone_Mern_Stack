import axios from "axios";
import { options, top_Rated_Moive } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../redux/movieSlice";

async function useTopRatedMovies() {
    const dispatch = useDispatch();
  try {
      const res = await axios.get(top_Rated_Moive,options);
      dispatch(getTopRatedMovies(res.data.results));

  } catch (error) {
       console.log(error);
  }
}

export default useTopRatedMovies;