import { DeepPartial } from '@/app/types/common';
import { type StoreSchema } from '@/app/providers/StoreProvider/config/StoreSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StoreSchema)).toBe(10);
  });
});
