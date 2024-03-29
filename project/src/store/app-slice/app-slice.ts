import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortOptions, Cities } from '../../const';


export type AppData = {
  city: Cities;
  sortOption: SortOptions;
};

const initialState: AppData = {
  city: Cities.Paris,
  sortOption: SortOptions.Popular,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<SortOptions>) => {
      state.sortOption = action.payload;
    },
    changeCity(state, action: PayloadAction<Cities>) {
      state.city = action.payload;
    }
  }
});


export const { changeCity, changeSort } = appSlice.actions;


