import { DeepPartial } from '@/app/types/common';
import { type StoreSchema } from '@/app/providers/StoreProvider/config/StoreSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should return counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounter(state as StoreSchema)).toEqual({ value: 10 });
  });
});
