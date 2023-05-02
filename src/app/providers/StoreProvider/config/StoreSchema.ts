import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
  login: LoginSchema;
}
