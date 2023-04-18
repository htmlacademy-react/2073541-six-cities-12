import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferAction, fetchNearOffersAction } from '../api-actions';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';

export type RoomData = {
  offer: Offer | null;
  offerStatus: FetchStatus;
  nearOffers: Offer[];
  nearOffersStatus: FetchStatus;
};

const initialState: RoomData = {
  offer: null,
  offerStatus: FetchStatus.Idle,
  nearOffers: [],
  nearOffersStatus: FetchStatus.Idle
};

export const roomSlice = createSlice({
  name: NameSpace.Room,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerStatus = FetchStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offerStatus = FetchStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerStatus = FetchStatus.Failed;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.nearOffersStatus = FetchStatus.Loading;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffersStatus = FetchStatus.Success;
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.nearOffersStatus = FetchStatus.Failed;
      });
  },
});
