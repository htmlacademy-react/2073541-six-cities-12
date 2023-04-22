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
  Loading = 'LOADING',
}

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite'
}

const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
  Room = 'ROOM',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
}

export enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}


export { TIMEOUT_SHOW_ERROR, AppRoute, AuthorizationStatus, Cities, SortOptions, APIRoute };
