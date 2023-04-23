import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';
import { FetchStatus } from '../../const';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.Favorites].favorites;

export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorites].fetchStatus;

export const getFavoriteStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isError: status === FetchStatus.Failed,
  isSuccess: status === FetchStatus.Success
})
);
