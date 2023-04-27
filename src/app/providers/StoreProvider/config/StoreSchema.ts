import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
}
