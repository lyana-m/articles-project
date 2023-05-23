import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw Error('No data received');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ProfileDataFetchigError');
    }
  }
);
