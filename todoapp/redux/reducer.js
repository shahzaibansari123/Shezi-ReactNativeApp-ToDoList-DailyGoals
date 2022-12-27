import { createReducer } from "@reduxjs/toolkit";

export const auth= createReducer({},{
    loginRequest:(state,action)=>{},
    loginSuccess:(state,action)=>{},
    loginFailed:(state,action)=>{},
})