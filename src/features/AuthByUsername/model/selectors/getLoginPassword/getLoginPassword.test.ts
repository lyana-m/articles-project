import { StoreSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';
import { DeepPartial } from '@/app/types/common';

describe('getLoginError', () => {
  it('should return data', () => {
    const store: DeepPartial<StoreSchema> = { login: { password: '123456' } };
    expect(getLoginPassword(store as StoreSchema)).toBe('123456');
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getLoginPassword(store as StoreSchema)).toBe(undefined);
  });
});
