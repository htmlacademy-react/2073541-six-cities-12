import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('offers/changeCity', (city: string) => ({
  payload: city,
}));

export const selectOffer = createAction('offer/selectOffer', (id: number | null) => ({
  payload: id
})
);

export const changeSort = createAction('offers/changeSort', (sortOption: string) => ({
  payload: sortOption
})
);

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));
