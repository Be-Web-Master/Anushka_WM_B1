import {configureStore} from '@reduxjs/toolkit'
import { counterReducers } from './slice'
export default configureStore({
  reducer:{
    counter:counterReducers,
  }
})