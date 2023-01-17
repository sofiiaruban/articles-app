
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdState } from '../types/types';


const initialState: IdState = {
   value: 0
}

export const articleFilterSlice = createSlice(
  { 
  name:"id",
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  } 
})
export const { updateId } =  idSlice.actions

export default idSlice.reducer