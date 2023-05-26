import { StoreSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { DeepPartial } from 'app/types/common';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData', () => {
  it('should return data', () => {
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
    const store: DeepPartial<StoreSchema> = { profile: { data: profileData } };
    expect(getProfileData(store as StoreSchema)).toEqual(profileData);
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getProfileData(store as StoreSchema)).toBe(undefined);
  });
});
