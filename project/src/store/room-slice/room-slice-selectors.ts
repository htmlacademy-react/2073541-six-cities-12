import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getOffer = (state: State): Offer | null => state[NameSpace.Room].offer;
export const getOfferStatus = (state: State): FetchStatus => state[NameSpace.Room].offerStatus;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Room].nearOffers;
export const getNearOffersStatus = (state: State): FetchStatus => state[NameSpace.Room].nearOffersStatus;
