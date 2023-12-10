import { StoreSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';
import { DeepPartial } from '@/app/types/common';

describe('getProfileError', () => {
  it('should return data', () => {
    const store: DeepPartial<StoreSchema> = { profile: { error: 'error' } };
    expect(getProfileError(store as StoreSchema)).toEqual('error');
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getProfileError(store as StoreSchema)).toBe(undefined);
  });
});
