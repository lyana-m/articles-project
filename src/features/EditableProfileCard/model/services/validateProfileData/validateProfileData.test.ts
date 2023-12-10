import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidationErrors } from '../../types/validationErrors';

describe('validateProfileData', () => {
  const profileData = {
    firstname: 'John',
    lastname: 'Doe',
    age: 48,
    city: 'San Francisco',
    currency: Currency.EUR,
    country: Country.Thailand,
    username: 'John888',
    avatar: 'http://',
  };

  it.each`
    data                                        | error
    ${{ ...profileData }}                       | ${[]}
    ${{ ...profileData, firstname: undefined }} | ${[ValidationErrors.ICRORRECT_FIRSTNAME]}
    ${{ ...profileData, lastname: undefined }}  | ${[ValidationErrors.ICRORRECT_LASTTNAME]}
    ${{ ...profileData, age: undefined }}       | ${[ValidationErrors.ICRORRECT_AGE]}
    ${{ ...profileData, age: 55.6 }}            | ${[ValidationErrors.ICRORRECT_AGE]}
    ${{ ...profileData, age: -10 }}             | ${[ValidationErrors.ICRORRECT_AGE]}
    ${undefined}                                | ${[ValidationErrors.NO_DATA, ValidationErrors.ICRORRECT_FIRSTNAME, ValidationErrors.ICRORRECT_LASTTNAME, ValidationErrors.ICRORRECT_AGE]}
  `('should return error', ({ data, error }) => {
    expect(validateProfileData(data)).toEqual(error);
  });
});
