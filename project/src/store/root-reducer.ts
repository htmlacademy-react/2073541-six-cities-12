import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice/user-slice';
import { offersSlice } from './offers-slice/offers-slice';
import { appSlice } from './app-slice/app-slice';
import { roomSlice } from './room-slice/room-slice';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Room]: roomSlice.reducer,
});
