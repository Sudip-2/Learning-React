import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState:0,
    name:"Counter",
    reducers:{
        increment:(state) => state+1,
        decrement:(state) => state-1
    }
})

export const {decrement,increment} = counterSlice.actions
export default counterSlice.reducer