import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { CITIES, AuthorizationStatus } from '../const';
import { changeCity, selectOffer, changeSort, loadOffers, setUserData, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { SortOptions } from '../const';
import { UserData } from '../types/user-data';

type InitialState = {
  city: string;
  offers: Offer[];
  currentOfferId: number | null;
  sortOption: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  userData: UserData | null;
};

const initialState: InitialState = {
  offers: [],
  city: CITIES[0],
  currentOfferId: null,
  sortOption: SortOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  userData: null,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});


export { reducer };
