import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_AUTHDATA } from 'shared/constants/localStorage';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthData: (store, action: PayloadAction<User>) => {
      store.authData = action.payload;
    },
    // initUserAuthData: (store, action: PayloadAction<User>) => {
    //   store.authData = action.payload;
    // },
    logout: (store) => {
      store.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_AUTHDATA);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
