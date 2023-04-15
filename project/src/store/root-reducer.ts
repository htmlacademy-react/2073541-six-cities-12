import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice/user.slice';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer
});
