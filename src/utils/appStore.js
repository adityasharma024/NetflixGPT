import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesRecuer from "./movieSlice";
const appStore=configureStore(
    
    {  
        reducer:{
            user: userReducer,
            movies:moviesRecuer,
            
        },
    }

)
export default appStore;