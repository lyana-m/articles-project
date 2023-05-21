import { StoreSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';
import { DeepPartial } from 'app/types/common';

describe('getLoginError', () => {
  it('should return data', () => {
    const store: DeepPartial<StoreSchema> = { login: { error: 'error' } };
    expect(getLoginError(store as StoreSchema)).toBe('error');
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getLoginError(store as StoreSchema)).toBe(undefined);
  });
});
