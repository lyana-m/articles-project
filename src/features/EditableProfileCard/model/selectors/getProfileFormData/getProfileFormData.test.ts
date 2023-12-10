import { StoreSchema } from '@/app/providers/StoreProvider';
import { getProfileFormData } from './getProfileFormData';
import { DeepPartial } from '@/app/types/common';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

describe('getProfileData', () => {
  it('should return data', () => {
    const profileFormData = {
      firstname: 'John',
      lastname: 'Doe',
      age: 48,
      city: 'San Francisco',
      currency: Currency.EUR,
      country: Country.Thailand,
      username: 'John888',
      avatar: 'http://',
    };
    const store: DeepPartial<StoreSchema> = { profile: { formData: profileFormData } };
    expect(getProfileFormData(store as StoreSchema)).toEqual(profileFormData);
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getProfileFormData(store as StoreSchema)).toBe(undefined);
  });
});
