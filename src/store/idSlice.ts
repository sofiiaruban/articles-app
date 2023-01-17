import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdState } from '../types/types';
import { RootState } from './store';

const initialState: IdState = {
   id: 0
}

export const idSlice = createSlice(
  { 
  name:"id",
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    }
  } 
})
export const { updateId } =  idSlice.actions

export default idSlice.reducer