import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    changeSort: (state, action: PayloadAction<SortOptions>) => {
      state.sortOption = action.payload;
    },
    changeCity(state, action: PayloadAction<Cities>) {
      state.city = action.payload;
    },
    selectOffer: (state, action: PayloadAction<number | null>) => {
      state.selectedOfferId = action.payload;
    }
  },
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


export const { changeCity, changeSort, selectOffer } = offersSlice.actions;


