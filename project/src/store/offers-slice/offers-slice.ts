import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction } from '../api-actions';
import { NameSpace, FetchStatus, SortOptions, Cities } from '../../const';
import { Offer } from '../../types/offers';


export type OffersData = {
  offers: Offer[];
  offersStatus: FetchStatus;
  city: Cities;
  sortOption: SortOptions;
  selectedOfferId: number | null;
};

const initialState: OffersData = {
  offers: [],
  offersStatus: FetchStatus.Idle,
  city: Cities.Paris,
  sortOption: SortOptions.Popular,
  selectedOfferId: null,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersStatus = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
      });
  }
});
