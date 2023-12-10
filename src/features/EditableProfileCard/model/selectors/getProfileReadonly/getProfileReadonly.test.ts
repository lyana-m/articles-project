import { StoreSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';
import { DeepPartial } from '@/app/types/common';

describe('getProfileReadonly', () => {
  it('should return data', () => {
    const store: DeepPartial<StoreSchema> = { profile: { readonly: true } };
    expect(getProfileReadonly(store as StoreSchema)).toEqual(true);
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getProfileReadonly(store as StoreSchema)).toBe(undefined);
  });
});
