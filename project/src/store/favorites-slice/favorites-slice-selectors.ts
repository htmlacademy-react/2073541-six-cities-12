import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.Favorites].favorites;

