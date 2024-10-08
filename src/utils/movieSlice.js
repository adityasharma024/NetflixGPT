import { createSlice } from "@reduxjs/toolkit";

const moiveSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }

        
    }
});
export const {addNowPlayingMovies,addPopularMovies,addTrendingMovies,addUpcomingMovies}=moiveSlice.actions;
export default moiveSlice.reducer;