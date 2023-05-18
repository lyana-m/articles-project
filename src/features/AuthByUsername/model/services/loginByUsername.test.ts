import { loginByUsername } from './loginByUsername';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
  it('should work with success', async () => {
    const userData = { password: '123', username: 'user' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  it('should work with error', async () => {
    const userData = { password: '123', username: 'user' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: undefined }));
    const result = await thunk.callThunk(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('AuthError');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
