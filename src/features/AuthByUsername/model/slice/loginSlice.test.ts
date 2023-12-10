import { DeepPartial } from '@/app/types/common';
import { loginSlice, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
  it('should set username', async () => {
    const state: DeepPartial<LoginSchema> = {};

    expect(loginReducer(state as LoginSchema, loginSlice.actions.setUsername('user'))).toEqual({ username: 'user' });
  });

  it('should set password', async () => {
    const state: DeepPartial<LoginSchema> = {};

    expect(loginReducer(state as LoginSchema, loginSlice.actions.setPassword('123'))).toEqual({ password: '123' });
  });
});
