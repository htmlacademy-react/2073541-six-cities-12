enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/room/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SortOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGHT: 'Price: low to high',
  PRICE_HIGHT_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};


export { AppRoute, AuthorizationStatus, CITIES, SortOptions };
