import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId: string, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);

      if (!response.data) {
        throw Error('ProfileDataFetchigError');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ProfileDataFetchigError');
    }
  }
);
