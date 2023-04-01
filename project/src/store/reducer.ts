import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { CITIES } from '../const';
import offers from '../mocks/offers';
import { changeCity, selectOffer, changeSort } from './action';
import { SortOptions } from '../const';

type InitialState = {
  city: string;
  offers: Offer[];
  currentOfferId: number | null;
  sortOption: string;
};

const initialState: InitialState = {
  offers,
  city: CITIES[0],
  currentOfferId: null,
  sortOption: SortOptions.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.currentOfferId = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortOption = action.payload;
    });
});


export { reducer };
