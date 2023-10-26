import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidationErrors } from '../../types/validationErrors';

describe('updateProfileData', () => {
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

  it('should work with success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    (thunk.getState as jest.Mock).mockReturnValue({ profile: { formData: profileData } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(profileData);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  it('should return validation error', async () => {
    const profileData = {
      firstname: '',
      lastname: '',
      age: 48,
      city: 'San Francisco',
      currency: Currency.EUR,
      country: Country.Thailand,
      username: 'John888',
      avatar: 'http://',
    };

    const thunk = new TestAsyncThunk(updateProfileData);
    (thunk.getState as jest.Mock).mockReturnValue({ profile: { formData: profileData } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual([ValidationErrors.ICRORRECT_FIRSTNAME, ValidationErrors.ICRORRECT_LASTTNAME]);
    expect(result.meta.requestStatus).toBe('rejected');
  });

  it('should work with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    (thunk.getState as jest.Mock).mockReturnValue({ profile: { formData: profileData } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: undefined }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual([ValidationErrors.SERVER_ERROR]);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
