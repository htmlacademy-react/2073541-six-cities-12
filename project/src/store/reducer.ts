import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { CITIES } from '../const';
import offers from '../mocks/offers';
import { cityChange } from './action';


type InitialState = {
  city: string;
  offers: Offer[];
};

const initialState: InitialState = {
  offers,
  city: CITIES[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
