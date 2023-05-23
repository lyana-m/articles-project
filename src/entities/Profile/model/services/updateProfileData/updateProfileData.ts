import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { Profile } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, getState, rejectWithValue }) => {
    try {
      const formData = getProfileFormData(getState() as StoreSchema);
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw Error('Profile update error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('ProfileUpdateError');
    }
  }
);
