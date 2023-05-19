import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraArg } from 'app/providers/StoreProvider/config/StoreSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, undefined, { rejectValue: string; extra: ExtraArg }>(
  'login/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw Error('No data received');
      }

      // thunkAPI.dispatch(userActions.setUserAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ProfileDataFetchigError');
    }
  }
);
