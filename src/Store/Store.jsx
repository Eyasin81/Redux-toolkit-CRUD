import { configureStore } from "@reduxjs/toolkit"; 

import BookReducer from "../feature/BookSlice";
//configureStore
const store=configureStore({
   reducer:{
      BookReducer:BookReducer
   }
})
export default store 

/* 
createStore

import StudentReducer from "../fetaures/Student/StudentSlice";
 const store=configureStore({
    reducer:{ 
      BookReducer:BookReducer,
      StudentReducer:StudentReducer
    }
    })
    
export default store 
 
    
*/