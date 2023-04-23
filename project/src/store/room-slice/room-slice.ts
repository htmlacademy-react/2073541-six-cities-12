import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferAction, fetchNearOffersAction } from '../api-actions';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { addToFavoritesAction, logoutAction } from '../api-actions';

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
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffersStatus = FetchStatus.Success;
        state.nearOffers = action.payload;
      })
      .addCase(addToFavoritesAction.fulfilled, (state, action) => {
        state.nearOffers.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });
        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if (state.offer) {
          state.offer.isFavorite = false;
        }
        state.nearOffers.forEach((offer) => {
          offer.isFavorite = false;
        });
      });
  },
});
