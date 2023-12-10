import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraArg } from '@/app/providers/StoreProvider/config/StoreSchema';
import { type User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_AUTHDATA } from '@/shared/constants/localStorage';

interface LoginData {
  password: string;
  username: string;
}

export const loginByUsername = createAsyncThunk<User, LoginData, { rejectValue: string; extra: ExtraArg }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw Error('No data received');
      }

      localStorage.setItem(USER_LOCALSTORAGE_AUTHDATA, JSON.stringify(response.data));

      thunkAPI.dispatch(userActions.setUserAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('AuthError');
    }
  }
);
