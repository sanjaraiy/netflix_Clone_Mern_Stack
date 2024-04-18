import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        toggle:false,
        trailerMovie:null,

    },
    reducers :{
        //actions
        getNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload; 
        },
        getPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        getUpComingMovies:(state,action) => {
            state.upComingMovies = action.payload;
        },
        setToggle:(state,action)=>{
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        }





    }

})

export const {getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies, setToggle, getTrailerMovie} = movieSlice.actions;

export default movieSlice.reducer;