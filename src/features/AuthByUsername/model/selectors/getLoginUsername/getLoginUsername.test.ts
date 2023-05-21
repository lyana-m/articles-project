import { StoreSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';
import { DeepPartial } from 'app/types/common';

describe('getLoginError', () => {
  it('should return data', () => {
    const store: DeepPartial<StoreSchema> = { login: { username: 'name' } };
    expect(getLoginUsername(store as StoreSchema)).toBe('name');
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getLoginUsername(store as StoreSchema)).toBe(undefined);
  });
});
