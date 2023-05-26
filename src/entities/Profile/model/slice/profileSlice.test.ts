import { DeepPartial } from 'app/types/common';
import { profileSlice, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidationErrors } from '../types/validationErrors';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice', () => {
  const profileData = {
    firstname: 'John',
    lastname: 'Doe',
    age: 48,
    city: 'San Francisco',
    currency: Currency.EUR,
    country: Country.Thailand,
    username: 'John888',
    avatar: 'http://',
  };

  it('should set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileSlice.actions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  it('should update state', () => {
    const state: DeepPartial<ProfileSchema> = { formData: profileData };

    expect(profileReducer(state as ProfileSchema, profileSlice.actions.updateFormData({ firstname: 'Jack' }))).toEqual({
      formData: {
        ...profileData,
        firstname: 'Jack',
      },
    });
  });

  it('should cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      formData: { ...profileData, firstname: 'Jack' },
      validationErrors: [],
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileSlice.actions.cancelEdit())).toEqual({
      data: profileData,
      formData: profileData,
      validationErrors: undefined,
      readonly: true,
    });
  });

  it('should call updateProfileData service with pending state', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validationErrors: [ValidationErrors.ICRORRECT_AGE] };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validationErrors: undefined,
    });
  });

  it('should call updateProfileData service with fulfiled state', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: undefined,
      formData: undefined,
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileData, '', undefined))).toEqual({
      isLoading: false,
      data: profileData,
      formData: profileData,
      readonly: true,
    });
  });
});
