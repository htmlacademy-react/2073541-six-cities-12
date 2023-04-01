import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('offers/changeCity', (city: string) => ({
  payload: city,
}));

export const selectOffer = createAction('offer/selectOffer', (id: number | null) => ({ payload: id })
);

export const changeSort = createAction('offers/changeSort', (sortOption: string) => ({ payload: sortOption })
);
