import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name:'counter',
  initialState:{count:0},
  reducers:{
    incBy1:(state,action) =>{console.log({state},{action});
    state.count++;
    return state;
    }
  }
})


export const {actions:counterActions, reducer:counterReducers} = counterSlice