import type { AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { type CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: StoreSchemaKeys, reducer: Reducer) => void;
  remove: (key: StoreSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  extra: ExtraArg;
  rejectValue: T;
  getState: () => StoreSchema;
}
