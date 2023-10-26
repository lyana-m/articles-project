import { StoreSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { DeepPartial } from 'app/types/common';
import { ValidationErrors } from '../../types/validationErrors';

describe('getProfileValidationErrors', () => {
  it('should return data', () => {
    const errors = [ValidationErrors.ICRORRECT_AGE, ValidationErrors.ICRORRECT_FIRSTNAME];
    const store: DeepPartial<StoreSchema> = { profile: { validationErrors: errors } };
    expect(getProfileValidationErrors(store as StoreSchema)).toEqual(errors);
  });

  it('should work without state', () => {
    const store: DeepPartial<StoreSchema> = {};
    expect(getProfileValidationErrors(store as StoreSchema)).toBe(undefined);
  });
});
