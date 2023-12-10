import { StoreSchema } from '@/app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';
import { DeepPartial } from '@/app/types/common';

describe('getLoginLoading', () => {
  it('should return true', () => {
    const store: DeepPartial<StoreSchema> = { login: { isLoading: true } };
    expect(getLoginLoading(store as StoreSchema)).toBe(true);
  });

  it('should return false', () => {
    const store: DeepPartial<StoreSchema> = { login: { isLoading: false } };
    expect(getLoginLoading(store as StoreSchema)).toBe(false);
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getLoginLoading(store as StoreSchema)).toBe(undefined);
  });
});
