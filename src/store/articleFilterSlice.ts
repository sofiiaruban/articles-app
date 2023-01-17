
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleItem, FilterStates} from '../types/types';


const initialState: FilterStates= {
  inputValue: "",
  filteredList: []
}

export const articleFilterSlice = createSlice(
  { 
  name:"filter",
  initialState,
  reducers: {
    updateInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    updateFilteredList: (state, action: PayloadAction<Array<ArticleItem>>) => {
      state.filteredList = action.payload;
    }
  } 
})
export const { updateInputValue, updateFilteredList} =  articleFilterSlice.actions

export default articleFilterSlice.reducer