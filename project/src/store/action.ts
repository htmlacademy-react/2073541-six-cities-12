import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
