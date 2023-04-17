import { State } from '../../types/state';
import { NameSpace, FetchStatus, SortOptions, Cities } from '../../const';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersStatus;
export const getOffersCity = (state: State): Cities => state[NameSpace.Offers].city;
export const getSortOption = (state: State): SortOptions => state[NameSpace.Offers].sortOption;
export const getSelectedOfferId = (state: State): number | null => state[NameSpace.Offers].selectedOfferId;

