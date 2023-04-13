import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../const';
import { UserData } from '../types/user-data';

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

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setUserData = createAction('user/setUserData', (userData: UserData) => ({ payload: userData })
);

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
