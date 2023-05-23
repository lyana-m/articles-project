import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: '',
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateFormData: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.formData = state.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.formData = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.formData = action.payload;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
