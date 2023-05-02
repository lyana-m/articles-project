import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCALSTORAGE_AUTHDATA } from 'shared/constants/localStorage';

interface LoginData {
  password: string;
  username: string;
}

export const loginByUsername = createAsyncThunk<User, LoginData, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

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
