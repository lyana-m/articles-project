import { loginByUsername } from './loginByUsername';
import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUsername', () => {
  it('should work with success', async () => {
    const userData = { password: '123', username: 'user' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  it('should work with error', async () => {
    const userData = { password: '123', username: 'user' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: undefined }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('AuthError');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
