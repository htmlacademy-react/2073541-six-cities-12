import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';


export const getOffer = (state: State): Offer | null => state[NameSpace.Room].offer;
export const offerStatus = (state: State): FetchStatus => state[NameSpace.Room].offerStatus;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Room].nearOffers;

export const getOfferStatus = createSelector([offerStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
