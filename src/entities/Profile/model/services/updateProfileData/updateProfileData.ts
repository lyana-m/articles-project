import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { Profile } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidationErrors } from '../../types/validationErrors';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidationErrors[]>>(
  'profile/updateProfileData',
  async (_, { extra, getState, rejectWithValue }) => {
    try {
      const formData = getProfileFormData(getState() as StoreSchema);

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put<Profile>(`/profile/${formData?.id || ''}`, formData);

      if (!response.data) {
        throw Error('Profile update error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue([ValidationErrors.SERVER_ERROR]);
    }
  }
);
