import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('fetchProfileData', () => {
  it('should work with success', async () => {
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

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(profileData);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  it('should work with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('ProfileDataFetchigError');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
