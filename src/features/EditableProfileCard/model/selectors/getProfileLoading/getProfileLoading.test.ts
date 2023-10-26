import { StoreSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';
import { DeepPartial } from 'app/types/common';

describe('getProfileLoading', () => {
  it('should return data', () => {
    const store: DeepPartial<StoreSchema> = { profile: { isLoading: true } };
    expect(getProfileLoading(store as StoreSchema)).toEqual(true);
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getProfileLoading(store as StoreSchema)).toBe(undefined);
  });
});
