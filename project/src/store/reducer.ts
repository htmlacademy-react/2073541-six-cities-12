import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { CITIES } from '../const';
import offers from '../mocks/offers';
import { changeCity, selectOffer } from './action';

type InitialState = {
  city: string;
  offers: Offer[];
  currentOfferId: number | null;
};

const initialState: InitialState = {
  offers,
  city: CITIES[0],
  currentOfferId: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.currentOfferId = action.payload;
    });
});


export { reducer };
